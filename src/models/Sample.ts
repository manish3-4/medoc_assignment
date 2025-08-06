import mongoose, { Document, Schema } from 'mongoose';

export interface Sample extends Document {
    patientName: string;
    agentId: mongoose.Types.ObjectId;
    hospitalId: mongoose.Types.ObjectId;
    scheduledAt: Date;
    status: 'pending' | 'collected';
}

const SampleSchema: Schema = new Schema({
    patientName: {
        type: String,
        required: true,
    },
    agentId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Agent',
    },
    hospitalId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Hospital',
    },
    scheduledAt: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'collected', 'delayed'],
        default: 'pending',
    },
}, {
    timestamps: true,
});

export const Sample = mongoose.model<Sample>('Sample', SampleSchema);