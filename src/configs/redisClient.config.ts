import Redis from 'ioredis';
import { envConfig } from './env.config';

const { REDIS_URL, REDIS_LOCAL_URL } = envConfig.env

const redisUrl = `${REDIS_URL}` || `${REDIS_LOCAL_URL}`;
const redisClient = new Redis(redisUrl);

redisClient.on('error', (err) => {
  console.error('Redis error:', err);
});

(async () => { redisClient.connect((res: any) => console.log(res)).catch(console.error) })

export default redisClient;