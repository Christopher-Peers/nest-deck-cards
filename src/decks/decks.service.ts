import { Injectable } from '@nestjs/common';

import { Deck, Suit, Rank, Card } from './interfaces/deck.interface';

@Injectable()
export class DecksService {

    private readonly state = {
        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"],
        suits: ["HEARTS", "DIAMONDS", "CLUBS", "SPADES"]
    };

    public getNewDecks(amount: number): Deck[] {
        let newDeck: Card[] = [];
        this.state.suits.forEach((suit: Suit) => {
            const completeSuit = this.generateCompleteSuit(suit);
            newDeck = [...newDeck, ...completeSuit];
        })

        return [ this.generateCompleteDeck(newDeck) ];
    }

    private generateCompleteSuit(suit: Suit): Card[] {
        return this.state.values.map((value: Rank) => ({ suit, value }));
    }

    private generateCompleteDeck(cards: Card[]): Deck {
        return {
            id: new Date().toISOString(),
            cards,
            cardsLeftInDeck: 52,
            hasBeenShuffled: false,
            timeLastShuffled: null
        }
    }

}
