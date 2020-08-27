import { Injectable } from '@nestjs/common';

import { Deck, Suit, Rank, Card } from './interfaces/deck.interface';

@Injectable()
export class DecksService {

    private readonly state = {
        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"],
        suits: ["HEARTS", "DIAMONDS", "CLUBS", "SPADES"]
    };

    public getNewDecks(amount: number): Deck[] {
        const newDecks = [];

        for (let i = 0; i < amount; i++) {

            newDecks.push(
                this.generateCompleteDeck(this.generateAllSuits())
            )
        }

        return newDecks;
    }

    private generateCompleteSuit(suit: Suit): Card[] {
        return this.state.values.map((value: Rank) => ({ suit, value }));
    }

    private generateAllSuits() {
        return this.state.suits.map((suit: Suit) => {
            return this.generateCompleteSuit(suit);
        }).flat();
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
