import { Injectable } from '@nestjs/common';

import { Deck, Suit, Rank, Card } from './interfaces/deck.interface';

@Injectable()
export class DecksService {

    private state = {
        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"],
        suits: ["HEARTS", "DIAMONDS", "CLUBS", "SPADES"],
        currentDecks: []
    };

    public getNewDecks(amount: number): Deck[] {
        const newDeckRefs = [];

        for (let i = 0; i < amount; i++) {
            const newDeckRef = this.generateCompleteDeck()
            this.state.currentDecks.push(newDeckRef)
            newDeckRefs.push(newDeckRef)
        }
        return newDeckRefs;
    }

    public getSpecificDeck(id: number): Deck {
        return this.findDeck(id);
    }

    private generateCompleteSuit(suit: Suit): Card[] {
        return this.state.values.map((value: Rank) => ({ suit, value }));
    }

    private generateAllSuits() {
        return this.state.suits.map((suit: Suit) => {
            return this.generateCompleteSuit(suit);
        }).flat();
    }

    private generateCompleteDeck(): Deck {
        return {
            id: Math.round(Math.random() * 100),
            cards: this.generateAllSuits(),
            cardsLeftInDeck: 52,
            hasBeenShuffled: false,
            timeLastShuffled: null
        }
    }

    private findDeck(id: number): Deck {
        return this.state.currentDecks.find((deck: Deck) => deck.id === id);
    }

}

