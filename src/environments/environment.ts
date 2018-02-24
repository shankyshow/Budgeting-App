// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAMPnPgfYGQlFJ8m20NbnMpb_AfsLR8GGE',
    authDomain: 'shankysapp.firebaseapp.com',
    databaseURL: 'https://shankysapp.firebaseio.com',
    storageBucket: 'shankysapp.appspot.com',
    messagingSenderId: '531247272229'
  }
};
