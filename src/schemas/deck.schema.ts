import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Card } from './card.schema';

@Schema()
export class Deck extends Document {
    @Prop()
    id: string;

    @Prop()
    cards: Card[]

    @Prop()
    cardsLeftInDeck: number;

    @Prop()
    hasBeenShuffled: boolean;

    @Prop()
    timeLastShuffled: string;
}

export const DeckSchema = SchemaFactory.createForClass(Deck);