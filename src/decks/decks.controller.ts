import { Controller, Get, Query, Param } from '@nestjs/common';

import { DecksService } from './decks.service';
import { Deck, FindDeckParams } from './interfaces/deck.interface';

@Controller('decks')
export class DecksController {

    constructor(
        private decksService: DecksService
    ) {}
    
    @Get('/')
    public getDecks(@Query('numberOfDecks') amountToCreate: string): Deck[] {
        const numberOfNewDecks = Number(amountToCreate);
        return this.decksService.getNewDecks(numberOfNewDecks);
    }

    @Get('/:id')
    public getSpecificDeck(@Param() params: FindDeckParams): Deck {
        return this.decksService.getSpecificDeck(params.id);
    }
}
