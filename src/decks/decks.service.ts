import { Injectable } from '@nestjs/common';

import { nanoid } from 'nanoid';

import { Deck, Suit, Rank, Card } from './interfaces/deck.interface';

@Injectable()
export class DecksService {

    private state = {
        values: ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"],
        suits: ["HEARTS", "DIAMONDS", "CLUBS", "SPADES"],
        currentDecks: [],
        players: {},
        piles: {}
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

    public getSpecificDeck(id: string): Deck {
        return this.findDeck(id);
    }

    private generateCompleteSuit(suit: Suit, deckId: string): Card[] {
        return this.state.values.map((value: Rank) => ({
            suit,
            value,
            id: nanoid(),
            deckId
        }));
    }

    private generateAllSuits(deckId: string) {
        return this.state.suits.map((suit: Suit) => {
            return this.generateCompleteSuit(suit, deckId);
        }).flat();
    }

    private generateCompleteDeck(): Deck {
        const deckId = nanoid();
        const newDeck = {
            id: deckId,
            cards: this.generateAllSuits(deckId),
            cardsLeftInDeck: 48,
            hasBeenShuffled: false,
            timeLastShuffled: null
        }
        return newDeck;
    }

    private findDeck(id: string): Deck {
        return this.state.currentDecks.find((deck: Deck) => deck.id === id);
    }

    public shuffleDeck(id: string): Deck {
        const specificDeck = this.findDeck(id);
        let shuffledCards: Card[] = [];

        for (let i = 0; i < 48; i ++) {
            const cardIndex = Math.floor(Math.random() * specificDeck.cards.length);
            const splicedCard: Card[] = specificDeck.cards.splice(cardIndex, 1)
            shuffledCards = [...shuffledCards, ...splicedCard];
        }

        specificDeck.cards = shuffledCards;
        specificDeck.hasBeenShuffled = true;
        specificDeck.timeLastShuffled = new Date().toISOString();
        console.log(specificDeck)
        return specificDeck;
    }

}

