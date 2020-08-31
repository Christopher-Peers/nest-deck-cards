import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Test extends Document {
    @Prop()
    id: string;

    @Prop()
    description: string;

    @Prop()
    cost: number;
}

export const TestSchema = SchemaFactory.createForClass(Test);