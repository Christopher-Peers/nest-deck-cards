import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';

import { DecksController } from './decks.controller';
import { DecksService } from './decks.service';
import { DeckSchema } from 'src/schemas/deck.schema';
import { CardsModule } from 'src/cards/cards.module';

@Module({
    imports: [
        MongooseModule.forFeature(
            [
                { name: 'Deck', schema: DeckSchema }
            ]
        ),
        CardsModule,
    ],
    controllers: [DecksController],
    providers: [DecksService]
})
export class DecksModule {}
