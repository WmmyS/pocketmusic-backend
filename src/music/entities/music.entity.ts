import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';
import { Document } from 'mongoose';

export type MusicDocument = Music & Document;

@Schema()
export class Music {
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
