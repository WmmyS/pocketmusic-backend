import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Playlist } from './entities/playlist.entity';

@Injectable()
export class PlaylistService {
  constructor(
    @Inject('PLAYLIST_REPOSITORY')
    private playlistRepository: Repository<Playlist>,
  ) {}

  async create(playlist: Playlist): Promise<Playlist> {
    return await this.playlistRepository.save(playlist);
  }

  async findAll(): Promise<Playlist[]> {
    return this.playlistRepository.find();
  }

  async findById(id: string): Promise<Playlist | undefined> {
    return await this.playlistRepository.findOneBy({ id });
  }

  async update(id: string, playlist: Playlist) {
    return await this.playlistRepository.update(id, playlist);
  }

  async remove(id: string) {
    return await this.playlistRepository.delete(id);
  }
}
