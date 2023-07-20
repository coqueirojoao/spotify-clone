import { Injectable } from '@angular/core';
import { SpotifyConfig } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor() {}

  getLoginUrl(): string {
    const authEndPoint: string = `${SpotifyConfig.authEndPoint}?`;
    const clientId: string = `client_id=${SpotifyConfig.clientId}&`;
    const redirectUri: string = `redirect_uri=${SpotifyConfig.redirectUri}&`;
    const scopes: string = `scope=${SpotifyConfig.scopes.join('%20')}&`;
    const response: string = `response_type=token&show_dialog=true`;
    return authEndPoint + clientId + redirectUri + scopes + response;
  }
}
