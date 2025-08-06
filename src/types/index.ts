export interface Sample {
    patientName: string;
    agentId: string;
    hospitalId: string;
    scheduledAt: Date;
    status: 'pending' | 'collected' | 'delayed';
}

export interface Agent {
    name: string;
    email: string;
    password: string;
}

export interface Hospital {
    name: string;
    location: string;
}

export interface Delay {
    sampleId: string;
    reason: string;
    expectedDelay: number; // in minutes
}