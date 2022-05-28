import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Music } from './entities/music.entity';
import { MusicService } from './music.service';

@Controller('music')
@ApiTags('musica')
export class MusicController {
  constructor(private readonly musicService: MusicService) {}

  @Get('search/:search')
  search(@Param('search') search: string): Promise<any> {
    return this.musicService.search(search);
  }

  @Post()
  create(@Body() music: Music) {
    return this.musicService.create(music);
  }

  @Get()
  findAll() {
    return this.musicService.findAll();
  }

  @Get(':musicId')
  async findOne(@Param('musicId') id: string) {
    return this.musicService.findById(id);
  }

  @Patch(':musicId')
  updateMapped(@Param('musicId') id: string, @Body() music: Music) {
    return this.musicService.update(id, music);
  }

  @Put(':musicId')
  update(@Param('musicId') id: string, @Body() music: Music) {
    return this.musicService.update(id, music);
  }

  @Delete(':musicId')
  remove(@Param('musicId') id: string) {
    return this.musicService.remove(id);
  }
}
