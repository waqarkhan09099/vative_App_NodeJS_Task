import request from 'supertest';
import app from '../src/app';

describe('Auth API', () => {
    it('should register a new user', async () => {
        const res = await request(app)
            .post('/api/auth/register')
            .send({
                username: 'devUser',
                email: 'admin@dev.com',
                password: 'dev123',
            });

        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('user');
    });
});
