import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MusicDocument = Music & Document;

@Schema()
export class Music {
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
