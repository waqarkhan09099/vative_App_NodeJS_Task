export interface EnvironmentModel {
    readonly SERVER_PORT: string;
    readonly SERVER_HOST: string;
    readonly SERVER_PROTOCOL: string;
    readonly NODE_ENV: string;
    readonly MONGODB_URI: string;
    readonly REDIS_URL: string;
    readonly REDIS_LOCAL_URL: string;
    readonly REDIS_HOST: string;
    readonly REDIS_PORT: string;
}




export interface GroupModel {
    readonly env: EnvironmentModel;
}