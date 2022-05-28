import { Column, Entity, PrimaryColumn } from 'typeorm';

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

  @Column()
  titulo: string;

  @Column()
  autor: string;

  @Column()
  descricao: string;

  @Column()
  url: string;

  @Column()
  tambnail: string;

  @Column()
  tempo: string;
}
