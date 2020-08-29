import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DecksModule } from './decks/decks.module';
import { CardsModule } from './cards/cards.module';

@Module({
  imports: [
      DecksModule,
      CardsModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
