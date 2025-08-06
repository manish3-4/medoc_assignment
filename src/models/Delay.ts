import mongoose, { Document, Schema } from 'mongoose';

export interface IDelay extends Document {
    sampleId: mongoose.Types.ObjectId;
    reason: string;
    expectedDelay: number; // in minutes
}

const DelaySchema: Schema = new Schema({
    sampleId: { type: mongoose.Types.ObjectId, required: true, ref: 'Sample' },
    reason: { type: String, required: true },
    expectedDelay: { type: Number, required: true }
}, { timestamps: true });

export default mongoose.model<IDelay>('Delay', DelaySchema);