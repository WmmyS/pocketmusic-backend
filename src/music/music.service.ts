import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import { Search } from 'src/common/google-api/search';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';
import { Music, MusicDocument } from './entities/music.entity';

@Injectable()
export class MusicService {
  constructor(
    @InjectModel(Music.name)
    private musicModel: Model<MusicDocument>,
  ) {}

  async search(search: string): Promise<any> {
    const result = await Search.search(search, 10);
    const items: Array<any> = [];
    result.items.forEach(function (item) {
      let music = new Music();
      music.autor = item.title;
      music.descricao = item.snippet;
      music.url = item.link;
      items.push(item);
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
    return this.musicModel.findById(id).exec();
  }

  async update(id: string, updateMusicDto: UpdateMusicDto) {
    return this.musicModel.findByIdAndUpdate(id, updateMusicDto).exec();
  }

  // TODO: Ajustar o método delete que está deletando entidades erradas
  async remove(id: string) {
    return await this.musicModel
      .findOneAndDelete({ _id: id })
      .exec()
      .then(() => {
        return 'Delected Successfuly';
      })
      .catch(() => {
        return new BadRequestException('Record not found');
      });
  }
}
