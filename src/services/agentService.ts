import Agent, { IAgent as AgentType } from '../models/Agent';
import { Sample } from '../models/Sample';
import { Document } from 'mongoose';

export const createAgent = async (agentData: Partial<AgentType>): Promise<Document> => {
    const agent = new Agent(agentData);
    return await agent.save();
};

export const getAgentSamples = async (agentId: string, status?: string): Promise<Document[]> => {
    const query: any = { agentId };
    if (status) {
        query.status = status;
    }
    return await Sample.find(query);
};

export const getAgentById = async (agentId: string): Promise<Document | null> => {
    return await Agent.findById(agentId);
};

export const getAllAgents = async (): Promise<Document[]> => {
    return await Agent.find();
};