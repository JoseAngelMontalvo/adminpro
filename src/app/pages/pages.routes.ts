import { Routes, RouterModule } from '@angular/router';
//Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromiseComponent } from './promise/promise.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuardsGuard } from '../services/service.index';
import { ProfileComponent } from './profile/profile.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [LoginGuardsGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          titulo: 'Dashboard',
          description: 'Es la pagina principal del usuario',
        },
      },
      {
        path: 'progress',
        component: ProgressComponent,
        data: {
          titulo: 'Progress Bar',
          description: 'Pagina de ejemplo de un progress bar',
        },
      },
      {
        path: 'graphic1',
        component: Graphic1Component,
        data: {
          titulo: 'Graphics',
          description: 'Pagina de ejemplo de graficas',
        },
      },
      {
        path: 'account-settings',
        component: AccountSettingsComponent,
        data: {
          titulo: 'user settings',
          description: 'Settings de usuario para cambiar tema de la app',
        },
      },
      {
        path: 'promises',
        component: PromiseComponent,
        data: { titulo: 'Promises', description: 'Ejemplo de promesas' },
      },
      {
        path: 'rxjs',
        component: RxjsComponent,
        data: {
          titulo: 'Rxjs',
          description: 'Ejemplo de rxjs Observables y operators',
        },
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: {
          titulo: 'Profile',
          description: 'Perfild e usuario',
        },
      },
      { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
    ],
  },
];

export const PAGES_ROUTES = RouterModule.forRoot(pagesRoutes, {
  useHash: true,
});
