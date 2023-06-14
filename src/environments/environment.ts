// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { appConfig } from "../app/shared/config/app.config";

export const environment = {
    production: false,
    hmr: false,
    apiUrl: appConfig.apiUrl
};
