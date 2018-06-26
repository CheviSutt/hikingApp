// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAewF3L96ZpOOmm_KqB7zI6V7lwseW7E7c",
    authDomain: "hikingapp-e36ba.firebaseapp.com",
    databaseURL: "https://hikingapp-e36ba.firebaseio.com",
    projectId: "hikingapp-e36ba",
    storageBucket: "hikingapp-e36ba.appspot.com",
    messagingSenderId: "59827419048"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
