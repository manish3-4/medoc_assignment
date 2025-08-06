import { Request, Response } from 'express';
import { AuthService } from '../services/authService';

const authService = new AuthService();

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const token = await authService.login(email, password);
        res.status(200).json({ token });
    } catch (error: any) {
        res.status(401).json({ message: error.message });
    }
};

export const register = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    try {
        const agent = await authService.register(name, email, password);
        res.status(201).json(agent);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};