import { Request, Response } from 'express';
import Delay from '../models/Delay';
import { Sample } from '../models/Sample';

// Report a delay on a sample pickup
export const reportDelay = async (req: Request, res: Response) => {
    const { sampleId, reason, expectedDelay } = req.body;

    try {
        const sample = await Sample.findById(sampleId);
        if (!sample) {
            return res.status(404).json({ message: 'Sample not found' });
        }

        const delay = new Delay({
            sampleId,
            reason,
            expectedDelay,
        });

        await delay.save();
        return res.status(201).json({ message: 'Delay reported successfully', delay });
    } catch (error) {
        return res.status(500).json({ message: 'Error reporting delay', error });
    }
};

// Fetch all delays for a specific sample
export const getDelaysForSample = async (req: Request, res: Response) => {
    const { sampleId } = req.params;

    try {
        const delays = await Delay.find({ sampleId });
        return res.status(200).json(delays);
    } catch (error) {
        return res.status(500).json({ message: 'Error fetching delays', error });
    }
};