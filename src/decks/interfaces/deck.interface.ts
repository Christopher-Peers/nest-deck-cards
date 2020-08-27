export interface Deck {
    id: number;
    cards: Card[];
    cardsLeftInDeck: number;
    hasBeenShuffled: boolean;
    timeLastShuffled: string | null;
}

export interface Card {
    suit: Suit;
    value: Rank;
}

export type Suit =  "HEARTS" | "DIAMONDS" | "CLUBS" | "SPADES";
export type Rank = number | "J" | "Q" | "K";

export interface FindDeckParams {
    id: number;
}