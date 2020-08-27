import { Controller, Get } from '@nestjs/common';

import { DecksService } from './decks.service';
import { Deck } from './interfaces/deck.interface';

@Controller('decks')
export class DecksController {

    constructor(
        private decksService: DecksService
    ) {}
    
    @Get('/')
    public getDecks(amountToCreate: number): Deck[] {
        return this.decksService.getNewDecks(1);
    }
}
