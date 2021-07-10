import crypto from 'crypto';

const generateRandomString = () => crypto.randomBytes(16).toString('hex');

export { generateRandomString };
