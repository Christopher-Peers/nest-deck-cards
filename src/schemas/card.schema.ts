import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { Rank, Suit } from '../decks/interfaces/deck.interface';

@Schema()
export class Card extends Document {
    @Prop()
    id: string;

    @Prop()
    deckId: string;

    @Prop()
    suit: Suit;

    @Prop()
    value: Rank
}

export const CardSchema = SchemaFactory.createForClass(Card);
