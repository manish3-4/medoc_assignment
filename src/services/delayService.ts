import Delay from '../models/Delay';
import { Sample } from '../models/Sample';

export const reportDelay = async (sampleId: string, reason: string, expectedDelay: number) => {
    const delay = new Delay({
        sampleId,
        reason,
        expectedDelay,
    });

    await delay.save();
    return delay;
};

export const getDelaysBySampleId = async (sampleId: string) => {
    return await Delay.find({ sampleId });
};