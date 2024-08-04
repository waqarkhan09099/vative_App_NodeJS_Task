import https from 'https';
import fs from 'fs';
import path from 'path';
import { envConfig } from './configs/env.config';
import http from 'http'
import app from './app';

const { SERVER_PORT,SERVER_PROTOCOL,NODE_ENV,SERVER_HOST } = envConfig.env;

let server: http.Server | https.Server
if (!SERVER_PROTOCOL || SERVER_PROTOCOL == 'http') server = http.createServer(app)
else {
  const keyPath: string = path.join(__dirname, '../ssl/private-key.pem')
  const crtPath: string = path.join(__dirname, '../ssl/certificate.pem')
  const checkPath: boolean = fs.existsSync(keyPath) && fs.existsSync(crtPath)
  if (!checkPath) {
    console.log('No SSL Certificate found to run HTTPS Server!!')
    process.exit(1)
  }
  const key: string = fs.readFileSync(keyPath, 'utf8')
  const cert: string = fs.readFileSync(crtPath, 'utf8')
  const credentials: https.ServerOptions = { key, cert }
  server = https.createServer(credentials, app)
}


async function startServer(server: http.Server | https.Server): Promise<void> {
  server.listen(SERVER_PORT || 4000, () => {
    const url = `${SERVER_PROTOCOL || 'http'}://${SERVER_HOST || 'localhost'}:${SERVER_PORT || 4000}`
    console.log(`Server is now running on ${url} in ${NODE_ENV || 'development'} mode`)
  })
}

(async () => {
  try {
    await startServer(server)
  } catch (error) {
    throw Error(`Server Connection Error: ${error}`)
  }
})()