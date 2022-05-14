import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import MongooseClassSerializerInterceptor from 'src/common/mongooseClassSerializer.interceptor';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';
import { Music } from './entities/music.entity';
import { MusicService } from './music.service';

@Controller('music')
@UseInterceptors(MongooseClassSerializerInterceptor(Music))
@ApiTags('musica')
export class MusicController {
  constructor(private readonly musicService: MusicService) {}

  @Get('search/:search')
  search(@Param('search') search: string): Promise<any> {
    return this.musicService.search(search);
  }

  @Post()
  create(@Body() createMusicDto: CreateMusicDto) {
    return this.musicService.create(createMusicDto);
  }

  @Get()
  findAll() {
    return this.musicService.findAll();
  }

  @Get(':musicId')
  async findOne(@Param('musicId') id: string) {
    return this.musicService.findOne(id);
  }

  @Patch(':musicId')
  updateMapped(
    @Param('musicId') id: string,
    @Body() updateMusicDto: UpdateMusicDto,
  ) {
    return this.musicService.update(id, updateMusicDto);
  }

  @Put(':musicId')
  update(@Param('musicId') id: string, @Body() updateMusicDto: UpdateMusicDto) {
    return this.musicService.update(id, updateMusicDto);
  }

  @Delete(':musicId')
  remove(@Param('musicId') id: string) {
    return this.musicService.remove(id);
  }
}
