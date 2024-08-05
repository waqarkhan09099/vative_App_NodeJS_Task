import { Router, Request, Response } from 'express';
import { Worker } from 'worker_threads';
import path from 'path';

const router = Router();

router.get('/fibonacci/:number', async (req: Request, res: Response): Promise<Response> => {
    const number = parseInt(req.params.number, 10);

    if (isNaN(number) || number < 0) {
        return res.status(400).send('Invalid number');
    }

    const worker = new Worker(path.resolve(__dirname, '../workers/fibonacciWorker.ts'));

    worker.postMessage(number);

    worker.on('message', (result: number[] | { error: string }) => {
        if (Array.isArray(result)) {
            return res.json(result);
        } else if ('error' in result) {
            return res.status(500).send(`Error calculating Fibonacci: ${result.error}`);
        } else {
            return res.status(500).send('Unknown error occurred');
        }
    });

    worker.on('error', (err) => {
        console.error('Worker error:', err);
        res.status(500).send('Internal server error');
    });

    worker.on('exit', (code) => {
        if (code !== 0) {
            console.error(`Worker stopped with exit code ${code}`);
        }
    });

    return res;
});

export default router;
