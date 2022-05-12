import { ApiProperty } from '@nestjs/swagger';

export class CreateMusicDto {
  @ApiProperty()
  titulo: string;

  @ApiProperty()
  autor: string;

  @ApiProperty()
  descricao: string;

  @ApiProperty()
  url: string;

  @ApiProperty()
  tambnail: string;

  @ApiProperty()
  tempo: string;
}
