import { parentPort, workerData } from 'worker_threads';

// Recursive Fibonacci function
function fibonacci(n: number): number {
    if (n < 2) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

try {
    const result = fibonacci(workerData);
    if (parentPort) {
        parentPort.postMessage(result);
    }
} catch (error: any) {
    if (parentPort) {
        parentPort.postMessage({ error: error?.message });
    }
}
