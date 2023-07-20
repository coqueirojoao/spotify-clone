export const environment = {
  production: true,
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
