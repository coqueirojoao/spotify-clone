import { IUser } from './../../interfaces/IUser';
import { Injectable } from '@angular/core';
import { SpotifyConfig } from 'src/environments/environment';
import Spotify from 'spotify-web-api-js';
import { SpotifyToUser } from 'src/common/spotifyHelper';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  spotifyApi: Spotify.SpotifyWebApiJs;
  user: IUser;

  constructor() {
    this.spotifyApi = new Spotify();
  }

  async startService(): Promise<boolean> {
    if (!!this.user) {
      return true;
    }

    const token: string | null = localStorage.getItem('token');

    if (!token) {
      return false;
    }

    try {
      this.defineWebToken(token);
      await this.getSpotifyUser();
      return !!this.user;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  async getSpotifyUser(): Promise<void> {
    const userInfo = await this.spotifyApi.getMe();
    this.user = SpotifyToUser(userInfo);
  }

  getLoginUrl(): string {
    const authEndPoint: string = `${SpotifyConfig.authEndPoint}?`;
    const clientId: string = `client_id=${SpotifyConfig.clientId}&`;
    const redirectUri: string = `redirect_uri=${SpotifyConfig.redirectUri}&`;
    const scopes: string = `scope=${SpotifyConfig.scopes.join('%20')}&`;
    const response: string = `response_type=token&show_dialog=true`;
    return authEndPoint + clientId + redirectUri + scopes + response;
  }

  getTokenUrl(): string {
    if (!window.location.hash) {
      return '';
    }

    const params: string[] = window.location.hash.substring(1).split('&');

    return params[0].split('=')[1];
  }

  defineWebToken(token: string) {
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token', token);
  }
}
