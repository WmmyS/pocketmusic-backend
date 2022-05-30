import { DataSource } from 'typeorm';
import { Playlist } from './entities/playlist.entity';

export const playlistProviders = [
  {
    provide: 'PLAYLIST_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Playlist),
    inject: ['DATA_SOURCE'],
  },
];
