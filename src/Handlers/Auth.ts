export class AuthHandler extends Error {
    code: string;
    constructor(message: string, code: string) {
        super(message);
        this.code = code;
        this.name = 'AuthHandler';
    }
}