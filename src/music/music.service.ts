import { Inject, Injectable } from '@nestjs/common';
import { Search } from 'src/common/google-api/search';
import { Regexp } from 'src/common/regexp';
import { Repository } from 'typeorm';
import { Music } from './entities/music.entity';

@Injectable()
export class MusicService {
  constructor(
    @Inject('MUSIC_REPOSITORY')
    private musicRepository: Repository<Music>,
  ) {}

  async search(search: string): Promise<any[]> {
    const result = await Search.search(search);
    const items: Array<any> = [];
    result.items.forEach(function (item) {
      if (
        item.pagemap.videoobject !== [] ||
        item.pagemap.videoobject[0].genre === 'Music'
      ) {
        if (
          item.pagemap.videoobject !== [] ||
          item.pagemap.videoobject[0] !== 'undefined'
        ) {
          if (item.formattedUrl.startsWith('https://www.youtube.com/watch')) {
            const song = new Music(
              item.pagemap.videoobject[0].videoid,
              Regexp.regexpVideoTitle(item.title),
              typeof item.pagemap.person !== 'undefined'
                ? item.pagemap.person[0].name
                : null,
              typeof item.pagemap.videoobject !== 'undefined'
                ? item.pagemap.videoobject[0].description
                : null,
              item.formattedUrl,
              typeof item.pagemap.videoobject !== 'undefined'
                ? item.pagemap.videoobject[0].thumbnailurl
                : null,
              typeof item.pagemap.videoobject !== 'undefined'
                ? Regexp.regexpDuration(item.pagemap.videoobject[0].duration)
                : null,
            );
            const timer = song.tempo.split(':');
            if (
              Number.parseInt(timer[0]) > 0 &&
              Number.parseInt(timer[0]) < 60 &&
              Number.parseInt(timer[1]) > 29
            ) {
              items.push(song);
            }
          }
        }
      }
    });
    return items;
  }

  async create(music: Music): Promise<Music> {
    return await this.musicRepository.save(music);
  }

  async bulk(bulk: Music[]) {
    return await bulk.forEach((data) => this.musicRepository.save(data));
  }

  async findAll(): Promise<Music[]> {
    return this.musicRepository.find();
  }

  async findById(id: string): Promise<Music | undefined> {
    return await this.musicRepository.findOneBy({ id });
  }

  async update(id: string, music: Music) {
    return await this.musicRepository.update(id, music);
  }

  async remove(id: string) {
    return await this.musicRepository.delete(id);
  }
}
