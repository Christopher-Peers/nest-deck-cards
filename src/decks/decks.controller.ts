import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';

import { DecksService } from './decks.service';
import { Deck, GetDeckParams } from './interfaces/deck.interface';

@Controller('decks')
export class DecksController {

    constructor(
        private decksService: DecksService
    ) {}
    
    @Post('/')
    public async createDecks(@Body('numberOfDecks') amountToCreate: number): Promise<Deck[]> {
        return await this.decksService.getNewDecks(amountToCreate);
    }

    @Get('/:id')
    public async getSpecificDeck(@Param() params: GetDeckParams): Promise<Deck> {
        return this.decksService.getSpecificDeck(params.id);
    }

    @Patch('/:id/shuffle')
    public getShuffledDeck(@Param() params: GetDeckParams): Deck {
        return this.decksService.shuffleDeck(params.id)
    }

}
