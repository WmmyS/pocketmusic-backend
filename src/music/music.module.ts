import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/dataBase.module';
import { MusicController } from './music.controller';
import { musicProviders } from './music.providers';
import { MusicService } from './music.service';

@Module({
  controllers: [MusicController],
  providers: [...musicProviders, MusicService],
  imports: [DatabaseModule],
})
export class MusicModule {}
