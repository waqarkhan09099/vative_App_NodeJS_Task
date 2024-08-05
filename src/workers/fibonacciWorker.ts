import { parentPort } from 'worker_threads';

function fibonacci(n: number): number[] {
    const result: number[] = [];
    let [a, b] = [0, 1];
    while (a <= n) {
        result.push(a);
        [a, b] = [b, a + b];
    }
    return result;
}

parentPort?.on('message', (number: number) => {
    try {
        if (number < 0) throw new Error('Number must be non-negative');
        const result = fibonacci(number);
        parentPort?.postMessage(result);
    } catch (error:any) {
        parentPort?.postMessage({ error: error?.message });
    }
});
