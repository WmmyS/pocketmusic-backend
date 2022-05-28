import { DataSource } from 'typeorm';
import { Music } from './entities/music.entity';

export const musicProviders = [
  {
    provide: 'MUSIC_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Music),
    inject: ['DATA_SOURCE'],
  },
];
