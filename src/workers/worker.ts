import { Worker } from 'worker_threads';
export function runWorker() {
    // ./src/migration/migration.js
    const worker = new Worker('your file path of migration code to js file', {
        workerData: {
            path: './worker.js'
        }
    });
    worker.on('message', function (data) {
        console.log('In Message');
    });
    worker.on('error', function (error) {
        worker.terminate();
    });
    worker.on('exit', (code) => {
        if (code !== 0)
            worker.terminate();
    });
    return worker;
}