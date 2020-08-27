import { Controller, Get, Query } from '@nestjs/common';

import { DecksService } from './decks.service';
import { Deck } from './interfaces/deck.interface';

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
}
