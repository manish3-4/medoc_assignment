import mongoose, { Document, Schema } from 'mongoose';

export interface IHospital extends Document {
    name: string;
    location: string;
}

const HospitalSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
});

const Hospital = mongoose.model<IHospital>('Hospital', HospitalSchema);

export default Hospital;