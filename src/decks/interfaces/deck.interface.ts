export interface Deck {
    id: string;
    cards: Card[];
    cardsLeftInDeck: number;
    hasBeenShuffled: boolean;
    timeLastShuffled: string | null;
}

export interface Card {
    id: string;
    suit: Suit;
    value: Rank;
}

export type Suit =  "HEARTS" | "DIAMONDS" | "CLUBS" | "SPADES";
export type Rank = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | "A" | "J" | "Q" | "K";

export interface DeckServiceState {
    currentDecks: Deck[];
    
}

export interface FindDeckParams {
    id: string;
}