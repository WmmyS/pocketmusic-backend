import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://wesleysantosadm:morais14407758@cursojs01.usrb6.mongodb.net/AGENDA?retryWrites=true&w=majority',
    ),
  ],
})
export class DataBaseModule {}
