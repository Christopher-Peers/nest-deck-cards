import { Injectable } from '@nestjs/common';

import { nanoid } from 'nanoid';
import { Model } from 'mongoose';

import { Card, Rank, Suit } from 'src/decks/interfaces/deck.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Deck } from 'src/schemas/deck.schema';


interface CardServiceState {
    values: Rank[];
    suits: Suit[];
}

@Injectable()
export class CardsService {

    constructor(
        @InjectModel('Deck') private readonly deckModel: Model<Deck>,
    ) {}

    private readonly state: CardServiceState = {
        values: ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"],
        suits: ["HEARTS", "DIAMONDS", "CLUBS", "SPADES"],
    }

    public createDeckCards(newDeckId: string): Card[] {
        return this.generateAllSuits(newDeckId);
    }

    public shuffleCards(deck: Deck): Model<Deck> {
        let shuffledCards: Card[] = [];

        for (let i = 0; i < 48; i ++) {
            const cardIndex = Math.floor(Math.random() * deck.cards.length);
            const splicedCard: Card[] = deck.cards.splice(cardIndex, 1)
            shuffledCards = [...shuffledCards, ...splicedCard];
        }

        deck.cards = shuffledCards;
        deck.hasBeenShuffled = true;
        deck.timeLastShuffled = new Date().toISOString();
        return new this.deckModel({deck});
    }

    private generateAllSuits(deckId: string): Card[] {
        return this.state.suits.map((suit: Suit) => {
            return this.generateCompleteSuit(suit, deckId);
        }).flat();
    }

    private generateCompleteSuit(suit: Suit, deckId: string): Card[] {
        return this.state.values.map((value: Rank) => ({
            suit,
            value,
            id: nanoid(),
            deckId
        }));
    }

}
