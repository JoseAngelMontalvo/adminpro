import { Routes, RouterModule } from '@angular/router';
//Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graphic1', component: Graphic1Component },
      { path: 'account-settings', component: AccountSettingsComponent },
      { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
    ],
  },
];

export const PAGES_ROUTES = RouterModule.forRoot(pagesRoutes, {
  useHash: true,
});
