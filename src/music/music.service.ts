import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import { Search } from 'src/common/google-api/search';
import { Regexp } from 'src/common/regexp';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';
import { Music, MusicDocument } from './entities/music.entity';

@Injectable()
export class MusicService {
  constructor(
    @InjectModel(Music.name)
    private musicModel: Model<MusicDocument>,
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

  async create(createMusicDto: CreateMusicDto): Promise<Music> {
    const createdMusic = await new this.musicModel(createMusicDto);
    return createdMusic.save();
  }

  async bulk(bulk: Document<any, any, any>[]) {
    this.musicModel.bulkSave(bulk);
  }

  async findAll() {
    return this.musicModel.find().exec();
  }

  async findOne(id: string) {
    const music = await this.musicModel.findOne({ musicId: id }).exec();
    if (typeof music !== 'undefined' && music !== null) {
      return music;
    } else {
      throw new NotFoundException('Registro não encontrado');
    }
  }

  async update(id: string, updateMusicDto: UpdateMusicDto) {
    return this.musicModel.findByIdAndUpdate(id, updateMusicDto).exec();
  }

  async remove(id: string) {
    const deleted = await this.findOne(id);
    return await this.musicModel
      .findOneAndDelete({ musicId: deleted.musicId })
      .exec()
      .then(() => {
        return 'Delected Successfuly';
      })
      .catch(() => {
        return new NotFoundException('Registro não encontrado');
      });
  }
}
