import { ApiProperty } from '@nestjs/swagger';
import { Music } from 'src/music/entities/music.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('playlist')
export class Playlist {
  constructor(id: string, nome: string, descricao: string, musics: Music[]) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.musics = musics;
  }

  @PrimaryGeneratedColumn()
  id: string;

  @ApiProperty({ type: () => String })
  @Column()
  nome: string;

  @ApiProperty({ type: () => String })
  @Column()
  descricao: string;

  @ApiProperty({ type: () => [Music] })
  @ManyToMany(() => Music, (music) => music.playlists)
  @JoinColumn()
  musics: Music[];
}
