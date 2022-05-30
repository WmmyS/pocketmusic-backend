import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/dataBase.module';
import { PlaylistController } from './playlist.controller';
import { playlistProviders } from './playlist.providers';
import { PlaylistService } from './playlist.service';

@Module({
  controllers: [PlaylistController],
  providers: [...playlistProviders, PlaylistService],
  imports: [DatabaseModule],
})
export class PlaylistModule {}
