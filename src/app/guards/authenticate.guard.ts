import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SpotifyService } from '../services/spotify.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateGuard implements CanLoad {
  constructor(private router: Router, private spotifyService: SpotifyService) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const token: string | null = localStorage.getItem('token');

    if (!token) {
      this.authenticationToken();
    }

    return new Promise(async (res) => {
      const createdUser = await this.spotifyService.startService();
      if (createdUser) {
        res(true);
      } else {
        res(this.authenticationToken());
      }
    });
  }

  authenticationToken() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    return false;
  }
}
