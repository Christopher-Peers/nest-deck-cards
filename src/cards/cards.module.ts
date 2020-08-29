import { Module } from '@nestjs/common';
import { CardsController } from './cards.controller';
import { CardsService } from './cards.service';
import { DecksModule } from 'src/decks/decks.module';

@Module({
    controllers: [CardsController],
    imports: [DecksModule],
    providers: [CardsService]
})
export class CardsModule {}