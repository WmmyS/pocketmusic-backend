import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Music, MusicSchema } from './entities/music.entity';
import { MusicController } from './music.controller';
import { MusicService } from './music.service';

@Module({
  controllers: [MusicController],
  providers: [MusicService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Music.name,
        schema: MusicSchema,
      },
    ]),
  ],
})
export class MusicModule {}
