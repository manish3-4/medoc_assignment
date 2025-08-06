import { Sample } from '../models/Sample';
import Agent from '../models/Agent';
import Hospital from '../models/Hospital';
import Delay from '../models/Delay';

export const addSample = async (patientName: string, agentId: string, hospitalId: string, scheduledAt: Date) => {
    const sample = new Sample({
        patientName,
        agentId,
        hospitalId,
        scheduledAt,
        status: 'scheduled', // Default status
    });
    return await sample.save();
};

export const markSampleAsCollected = async (sampleId: string) => {
    return await Sample.findByIdAndUpdate(sampleId, { status: 'collected' }, { new: true });
};

export const fetchSamplesByAgent = async (agentId: string, status?: string) => {
    const query: any = { agentId };
    if (status) {
        query.status = status;
    }
    return await Sample.find(query).populate('hospitalId').populate('agentId');
};

export const reportDelay = async (sampleId: string, reason: string, expectedDelay: number) => {
    const delay = new Delay({
        sampleId,
        reason,
        expectedDelay,
    });
    await delay.save();
    return await Sample.findByIdAndUpdate(sampleId, { new: true });
};