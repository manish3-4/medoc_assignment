import { Request, Response } from 'express';
import Agent from '../models/Agent';
import { createAgent, getAgentById } from '../services/agentService';

export const addAgent = async (req: Request, res: Response) => {
    try {
        const agentData = req.body;
        const newAgent = await createAgent(agentData);
        res.status(201).json(newAgent);
    } catch (error) {
        res.status(500).json({ message: 'Error adding agent', error });
    }
};

export const fetchAgent = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const agent = await getAgentById(id);
        if (!agent) {
            return res.status(404).json({ message: 'Agent not found' });
        }
        res.status(200).json(agent);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching agent', error });
    }
};