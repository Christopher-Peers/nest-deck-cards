import { Injectable } from '@nestjs/common';

import { DecksService } from 'src/decks/decks.service';
import { Deck, Card } from 'src/decks/interfaces/deck.interface';

@Injectable()
export class CardsService {

    constructor(
        private decksService: DecksService
    ) {}

    public getTopCard(deckId: string) {
        const specificDeck: Deck = this.decksService.getSpecificDeck(deckId);
        const nextCard: Card = specificDeck.cards.pop();
        return nextCard;
    }

}