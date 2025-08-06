import { Request, Response } from 'express';
import {Sample } from '../models/Sample';

export const addSample = async (req: Request, res: Response) => {
    const { patientName, agentId, hospitalId, scheduledAt } = req.body;

    try {
        const newSample = new Sample({
            patientName,
            agentId,
            hospitalId,
            scheduledAt,
            status: 'pending', // Default status
        });

        await newSample.save();
        res.status(201).json(newSample);
    } catch (error) {
        res.status(500).json({ message: 'Error adding sample', error });
    }
};

export const markSampleCollected = async (req: Request, res: Response) => {
    const { sampleId } = req.params;

    try {
        const updatedSample = await Sample.findByIdAndUpdate(sampleId, { status: 'collected' }, { new: true });
        if (!updatedSample) {
            return res.status(404).json({ message: 'Sample not found' });
        }
        res.json(updatedSample);
    } catch (error) {
        res.status(500).json({ message: 'Error marking sample as collected', error });
    }
};

export const fetchSamplesByAgent = async (req: Request, res: Response) => {
    const { agentId } = req.params;
    const { status } = req.query;

    try {
        const query: any = { agentId };
        if (status) {
            query.status = status;
        }

        const samples = await Sample.find(query);
        res.json(samples);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching samples', error });
    }
};

export const reportDelay = async (req: Request, res: Response) => {
    const { sampleId, reason, expectedDelay } = req.body;

    try {
        const sample = await Sample.findById(sampleId);
        if (!sample) {
            return res.status(404).json({ message: 'Sample not found' });
        }

        // Logic to handle delay reporting can be added here
        // For example, you might want to create a Delay record

        res.json({ message: 'Delay reported', sampleId, reason, expectedDelay });
    } catch (error) {
        res.status(500).json({ message: 'Error reporting delay', error });
    }
};