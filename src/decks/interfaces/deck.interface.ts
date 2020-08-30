export interface Deck {
    id: string;
    cards: Card[];
    cardsLeftInDeck: number;
    hasBeenShuffled: boolean;
    timeLastShuffled: string | null;
}

export interface Card {
    id: string;
    deckId: string;
    suit: Suit;
    value: Rank;
}

export type Suit =  "HEARTS" | "DIAMONDS" | "CLUBS" | "SPADES";
export type Rank = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | "A" | "J" | "Q" | "K";

export interface DeckServiceState {
    currentDecks: Deck[];
    players: Player[];
    piles: Piles;
}

export interface Piles {
    inPlay: Card[];
    discarded: Card[];
}

export interface Player {
    id: string;
    currentHand: Card[]; // references to the ids?

}

export interface GetDeckParams {
    id: string;
}