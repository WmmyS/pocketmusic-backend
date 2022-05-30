import { ApiProperty } from '@nestjs/swagger';
import { Playlist } from 'src/playlist/entities/playlist.entity';
import { Column, Entity, ManyToMany, PrimaryColumn } from 'typeorm';

@Entity('music')
export class Music {
  constructor(
    id: string,
    titulo: string,
    autor: string,
    descricao: string,
    url: string,
    tambnail: string,
    tempo: string,
  ) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.descricao = descricao;
    this.url = url;
    this.tambnail = tambnail;
    this.tempo = tempo;
  }

  @PrimaryColumn()
  id: string;

  @ApiProperty({ type: () => String })
  @Column()
  titulo: string;

  @ApiProperty({ type: () => String })
  @Column()
  autor: string;

  @ApiProperty({ type: () => String })
  @Column()
  descricao: string;

  @ApiProperty({ type: () => String })
  @Column()
  url: string;

  @ApiProperty({ type: () => String })
  @Column()
  tambnail: string;

  @ApiProperty({ type: () => String })
  @Column()
  tempo: string;

  @ManyToMany(() => Playlist, (playlist) => playlist.musics)
  playlists: Playlist[];
}
