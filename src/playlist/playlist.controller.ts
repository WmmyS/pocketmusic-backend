import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Playlist } from './entities/playlist.entity';
import { PlaylistService } from './playlist.service';

@Controller('playlist')
@ApiTags('playlist')
export class PlaylistController {
  constructor(private readonly playlistService: PlaylistService) {}

  @Post()
  create(@Body() playlist: Playlist) {
    return this.playlistService.create(playlist);
  }

  @Get()
  findAll() {
    return this.playlistService.findAll();
  }

  @Get(':playlistId')
  findOne(@Param('id') id: string) {
    return this.playlistService.findById(id);
  }

  @Patch(':playlistId')
  update(@Param('playlistId') id: string, @Body() playlist: Playlist) {
    return this.playlistService.update(id, playlist);
  }

  @Delete(':playlistId')
  remove(@Param('id') id: string) {
    return this.playlistService.remove(id);
  }
}
