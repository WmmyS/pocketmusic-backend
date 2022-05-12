import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MusicDocument = Music & Document;

@Schema()
export class Music {
  @Prop()
  _titulo: string;

  @Prop()
  _autor: string;

  @Prop()
  _descricao: string;

  @Prop()
  _url: string;

  @Prop()
  _tambnail: string;

  @Prop()
  _tempo: string;
}

export const MusicSchema = SchemaFactory.createForClass(Music);
