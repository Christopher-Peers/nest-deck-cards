import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DecksModule } from './decks/decks.module';
import { CardsModule } from './cards/cards.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRoot(process.env.DB_CONNECTION_STRING),
        DecksModule,
        CardsModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
