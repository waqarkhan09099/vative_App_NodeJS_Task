import { Router, Request, Response } from 'express';
import { Worker } from 'worker_threads';
import path from 'path';

const router = Router();

router.get('/fibonacci/:number', (req: Request, res: Response): void => {
    const number = parseInt(req.params.number, 10);

    if (isNaN(number) || number < 0) {
        res.status(400).send('Invalid number');
        return;
    }

    const worker = new Worker(path.resolve(__dirname, '../workers/fibonacciWorker.js'), {
        workerData: number,
    });

    worker.on('message', (result: number | { error: string }) => {
        // Check if the result is an object with an error property
        if (typeof result === 'object' && 'error' in result) {
            res.status(500).send(`Error calculating Fibonacci: ${result.error}`);
        } else {
            // Otherwise, assume it's the Fibonacci result and send it back
            res.json({ result });
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
});

export default router;
