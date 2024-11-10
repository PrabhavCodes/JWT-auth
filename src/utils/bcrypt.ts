import bcrypt from 'bcrypt';

export const hashValue = async (value: string, saltRounds: number = 10): Promise<string> => {
    try {
        return await bcrypt.hash(value, saltRounds);
    } catch (error) {
        console.error('Error hashing value:', error);
        throw error;
    }
};

export const compareValue = async (value: string, hashedValue: string): Promise<boolean> => {
    try {
        return await bcrypt.compare(value, hashedValue);
    } catch (error) {
        console.error('Error comparing values:', error);
        return false;
    }
};