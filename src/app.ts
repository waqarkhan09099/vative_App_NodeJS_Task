import express, { NextFunction,Request,Response } from 'express';
import helmet from 'helmet';
import session from 'express-session';
import connectRedis from 'connect-redis';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import redisClient from './configs/redisClient.config';
import logger from './configs/logger.config';
import connectToDb from './configs/db.config';
import chatRoutes from './routes/chat.route'
import authRoutes from './routes/auth.route'
import fibonacciRoutes from './routes/fibonacci.route'
import romanToIntTaskRoutes from './routes/romanToInteger.route';

const redisStore = connectRedis(session);
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));
app.set('trust proxy', 1);

connectToDb()

app.use(
  session({
    store: new redisStore({ client: redisClient }),
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 1000 * 60 * 30,
    },
  })
);

app.use((req: Request, res: Response, next: NextFunction) => {
    logger.info(`HTTP ${req.method} ${req.url}`);
    next();
  });

app.use(helmet());
app.use(cors({ origin: '*' }));
app.disable('x-powered-by');

app.use((req, res, next) => {
  console.log(`http ${req.method} ${req.url}`);
  next();
});

// --------------- Routes ---------------------

app.use('/api/chat', chatRoutes);
app.use('/api/auth', authRoutes);
app.use('/api', romanToIntTaskRoutes);
app.use('/api', fibonacciRoutes);

app.get("*", (req, res) => {
  res.status(200).json({status:false,error:"Route doesn't exist"});
})

export default app;