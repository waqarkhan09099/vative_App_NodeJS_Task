import request from 'supertest';
import app from '../src/app';

describe('GET /api/fibonacci/:number', () => {
    it('should return a valid Fibonacci sequence for a positive number', async () => {
        const number = 10;
        const response = await request(app).get(`/api/fibonacci/${number}`);
        expect(response.status).toBe(200);
        expect(response.body).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });

    it('should return an error for a negative number', async () => {
        const number = -5;
        const response = await request(app).get(`/api/fibonacci/${number}`);
        expect(response.status).toBe(400);
        expect(response.text).toBe('Invalid number');
    });

    it('should return an error for invalid input', async () => {
        const number = 'invalid';
        const response = await request(app).get(`/api/fibonacci/${number}`);
        expect(response.status).toBe(400);
        expect(response.text).toBe('Invalid number');
    });

    it('should handle worker thread errors gracefully', async () => {
        const number = 1000000;
        const response = await request(app).get(`/api/fibonacci/${number}`);
        expect(response.status).toBe(500);
        expect(response.text).toContain('Internal server error');
    });
});
