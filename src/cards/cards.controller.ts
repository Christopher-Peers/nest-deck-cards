import { Controller, Get, Query } from '@nestjs/common';

import { CardsService } from './cards.service';
import { Card } from 'src/decks/interfaces/deck.interface';

@Controller('cards')
export class CardsController {

    constructor(
        private cardsService: CardsService
    ) {}
    
    @Get('/')
    public getTopCardFromPack(@Query('deckId') deckId: string): Card {
        return this.cardsService.getTopCard(deckId);
    }

}