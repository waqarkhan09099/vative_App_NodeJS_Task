import dotenv from 'dotenv'
import { EnvironmentModel, GroupModel } from './env.interfaces'
dotenv.config()

const env = JSON.parse(JSON.stringify(process.env)) as EnvironmentModel


export const envConfig: GroupModel = {
    env
}