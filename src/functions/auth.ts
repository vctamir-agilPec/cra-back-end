import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import { Payload } from '../interfaces/Payload';

function hashPassword(password: string, salt = crypto.randomBytes(16).toString('hex')) {
    const iterations = 100000;
    const keyLength = 64;
    const digest = 'sha256';

    const hashedPassword = crypto.pbkdf2Sync(password, salt, iterations, keyLength, digest).toString('hex');

    return `${salt}:${hashedPassword}`;
}

function verifyPassword(password: string, hashedPassword: string) {
    const [salt, key] = hashedPassword.split(':');
    const iterations = 100000;
    const keyLength = 64;
    const digest = 'sha256';

    const hashedBuffer = crypto.pbkdf2Sync(password, salt, iterations, keyLength, digest).toString('hex');
    return hashedBuffer === key;
}

function createToken(payload: Payload) {
    const secretKey = process.env.SECRET_KEY || 'secret';
    const token = jwt.sign(payload, secretKey, {
        expiresIn: '1h', // Token expiration time
    });
    return token;
}

function jwtDecode(token: string): Record<string, any> {
    if (!token) {
        return {};
    }
    const [, payload] = token.split(".");
    const decodedPayload = Buffer.from(payload, 'base64').toString('utf-8');
    return JSON.parse(decodedPayload);
}


export { createToken, hashPassword, jwtDecode, verifyPassword };

