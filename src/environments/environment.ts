// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
};

export const SpotifyConfig = {
  clientId: 'f55fae945b364eada546193c73e73667',
  authEndPoint: 'https://accounts.spotify.com/authorize',
  redirectUri: 'http://localhost:4200/login/',
  scopes: [
    'user-read-currently-playing', // Música atual.
    'user-read-recently-played', // Música recentemente tocada.
    'user-read-playback-state', // Ler estado do player de usuário.
    'user-top-read', // Top artistas e top músicas do user.
    'user-modify-playback-state', // Alterar o tipo de player do usuário.
    'user-library-read', // Fazer leitura da biblioteca do user.
    'playlist-read-private', // Ler playlist's privadas do user.
    'playlist-read-collaborative', // Ler playlist's colaborativas do user.
  ],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
