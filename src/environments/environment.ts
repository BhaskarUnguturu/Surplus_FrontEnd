import { appConfig } from "../app/shared/config/app.config";

export const environment = {
    production: false,
    hmr: false,
    apiUrl: appConfig.apiUrl
};
