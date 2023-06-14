import { appConfig } from "../app/shared/config/app.config";

export const environment = {
    production: true,
    hmr: false,
    apiUrl: appConfig.apiUrl
};
