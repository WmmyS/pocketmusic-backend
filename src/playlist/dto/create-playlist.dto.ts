import { Exclude, Expose } from 'class-transformer';
import { InsertMusicDto } from './insert-music.dto';

@Exclude()
export class CreatePlaylistDto {
  @Expose()
  name: string;

  @Expose()
  description: string;

  @Expose()
  musics: InsertMusicDto[];
}
