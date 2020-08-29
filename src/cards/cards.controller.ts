import { Controller, Get } from '@nestjs/common';
import { CardsService } from './cards.service';
import { DecksService } from 'src/decks/decks.service';

@Controller('cards')
export class CardsController {

    constructor(
        private cardsService: CardsService,
        private decksService: DecksService
    ) {}
    
    @Get('/')
    public getTopCardFromPack(): string {
        return 'hello';
    }
}