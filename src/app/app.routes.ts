import { Routes } from '@angular/router';
import { AuthenticateGuard } from './guards/authenticate.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'player',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((e) => e.LoginModule),
  },
  {
    path: 'player',
    loadChildren: () =>
      import('./pages/player/player.module').then((e) => e.PlayerModule),
    canLoad: [AuthenticateGuard],
  },
];
