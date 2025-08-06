import mongoose, { Document, Schema } from 'mongoose';

export interface IAgent extends Document {
    name: string;
    email: string;
    password: string;
}

const AgentSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });

export default mongoose.model<IAgent>('Agent', AgentSchema);