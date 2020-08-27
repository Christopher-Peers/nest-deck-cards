import { Module } from '@nestjs/common';
import { DecksController } from './decks.controller';

@Module({
  controllers: [DecksController]
})
export class DecksModule {}
