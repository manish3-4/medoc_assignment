import Hospital  from '../models/Hospital';

export const createHospital = async (hospitalData: { name: string; location: string }) => {
    const hospital = new Hospital(hospitalData);
    return await hospital.save();
};

export const getHospitalById = async (hospitalId: string) => {
    return await Hospital.findById(hospitalId);
};

export const getAllHospitals = async () => {
    return await Hospital.find();
};