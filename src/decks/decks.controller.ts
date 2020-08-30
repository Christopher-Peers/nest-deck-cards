import { Controller, Get, Query, Param } from '@nestjs/common';

import { DecksService } from './decks.service';
import { Deck, GetDeckParams } from './interfaces/deck.interface';

@Controller('decks')
export class DecksController {

    constructor(
        private decksService: DecksService
    ) {}
    
    @Get('/create')
    public createDecks(@Query('numberOfDecks') amountToCreate: string): Deck[] {
        const numberOfNewDecks = Number(amountToCreate);
        return this.decksService.getNewDecks(numberOfNewDecks);
    }

    @Get('/:id')
    public getSpecificDeck(@Param() params: GetDeckParams): Deck {
        return this.decksService.getSpecificDeck(params.id);
    }

    @Get('/:id/shuffle')
    public getShuffledDeck(@Param() params: GetDeckParams): Deck {
        return this.decksService.shuffleDeck(params.id)
    }
}
