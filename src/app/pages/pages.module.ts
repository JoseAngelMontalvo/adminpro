import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//modules
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
//routes
import { PAGES_ROUTES } from './pages.routes';
//components
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromiseComponent } from './promise/promise.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graphic1Component,
    AccountSettingsComponent,
    PromiseComponent,
    RxjsComponent,
  ],
  exports: [DashboardComponent, ProgressComponent, Graphic1Component],
  imports: [SharedModule, PAGES_ROUTES, FormsModule, ComponentsModule],
})
export class PagesModule {}
