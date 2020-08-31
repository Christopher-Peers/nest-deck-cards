import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { nanoid } from 'nanoid';

import { Deck as IDeck, Card } from './interfaces/deck.interface';
import { Model } from 'mongoose';
import { Deck } from 'src/schemas/deck.schema';
import { CardsService } from 'src/cards/cards.service';

@Injectable()
export class DecksService {

    constructor(
        @InjectModel('Deck') private readonly deckModel: Model<Deck>,
        private cardsService: CardsService
    ) {}

    private state = {
        currentDecks: [],
        players: {},
        piles: {}
    };

    public async getNewDecks(amount: number) {

        const newDecks = [];

        for (let i = 0; i < amount; i++) {
            const newDeck = this.generateCompleteDeck();
            newDecks.push(newDeck);
        }
        
        return await this.deckModel.insertMany(newDecks)
    }

    public async getSpecificDeck(id: string): Promise<Deck> {
        let foundDeck;
        try {
            foundDeck = await this.deckModel.findOne({ id });
        } catch(e) {
            throw new NotFoundException('Not Here :(')
        }
        if (!foundDeck) {
            throw new NotFoundException('Not Here :(')
        }
        return foundDeck;
    }

    //moved from card service
    // public getTopCard(deckId: string) {
    //     const specificDeck: Deck = this.decksService.getSpecificDeck(deckId);
    //     const nextCard: Card = specificDeck.cards.pop();
    //     return nextCard;
    // }

    public async shuffleDeck(id: string): IDeck {
        const deckToShuffle = await this.deckModel.findOne({ id })
        const shuffledDeck = this.cardsService.shuffleCards(deckToShuffle);
        this.deckModel.findOneAndUpdate({ id }, shuffledDeck)
    }

    // private generateCompleteSuit(suit: Suit, deckId: string): Card[] {
    //     return this.state.values.map((value: Rank) => ({
    //         suit,
    //         value,
    //         id: nanoid(),
    //         deckId
    //     }));
    // }

    // private generateAllSuits(deckId: string) {
    //     return this.state.suits.map((suit: Suit) => {
    //         return this.generateCompleteSuit(suit, deckId);
    //     }).flat();
    // }

    private generateCompleteDeck(): IDeck {
        const deckId = nanoid();
        const newDeck = {
            id: deckId,
            cards: this.cardsService.createDeckCards(deckId),
            cardsLeftInDeck: 48,
            hasBeenShuffled: false,
            timeLastShuffled: null
        }
        return newDeck;
    }

    private findDeck(id: string): IDeck {
        return this.state.currentDecks.find((deck: Deck) => deck.id === id);
    }

}

