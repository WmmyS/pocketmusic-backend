import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataBaseModule } from './database/dataBase.module';
import { MusicModule } from './music/music.module';

@Module({
  imports: [
    MusicModule,
    DataBaseModule,
    ConfigModule.forRoot({
      envFilePath: `./config/${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
