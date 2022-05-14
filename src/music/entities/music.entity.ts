import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';
import { Document } from 'mongoose';

export type MusicDocument = Music & Document;

@Schema()
export class Music {
  constructor(
    titulo: string,
    autor: string,
    descricao: string,
    url: string,
    tambnail: string,
    tempo: string,
  ) {
    this.titulo = titulo;
    this.autor = autor;
    this.descricao = descricao;
    this.url = url;
    this.tambnail = tambnail;
    this.tempo = tempo;
  }

  @Transform(({ value }) => value.toString())
  _id: string;

  @Prop()
  titulo: string;

  @Prop()
  autor: string;

  @Prop()
  descricao: string;

  @Prop()
  url: string;

  @Prop()
  tambnail: string;

  @Prop()
  tempo: string;
}

export const MusicSchema = SchemaFactory.createForClass(Music);
