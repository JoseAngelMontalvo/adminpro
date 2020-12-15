import { NgModule } from '@angular/core';
//modules
import { SharedModule } from '../shared/shared.module';
//routes
import { PAGES_ROUTES } from './pages.routes';
//components
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graphic1Component,
  ],
  exports: [DashboardComponent, ProgressComponent, Graphic1Component],
  imports: [SharedModule, PAGES_ROUTES],
})
export class PagesModule {}
