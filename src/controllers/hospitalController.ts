import { Request, Response } from 'express';
import Hospital from '../models/Hospital';
import { Hospital as IHospital } from '../types';

export const addHospital = async (req: Request, res: Response) => {
    try {
        const hospitalData: IHospital = req.body;
        const newHospital = new Hospital(hospitalData);
        await newHospital.save();
        res.status(201).json(newHospital);
    } catch (error) {
        res.status(500).json({ message: 'Error adding hospital', error });
    }
};

export const getHospitals = async (req: Request, res: Response) => {
    try {
        const hospitals = await Hospital.find();
        res.status(200).json(hospitals);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching hospitals', error });
    }
};

export const getHospitalById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const hospital = await Hospital.findById(id);
        if (!hospital) {
            return res.status(404).json({ message: 'Hospital not found' });
        }
        res.status(200).json(hospital);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching hospital', error });
    }
};