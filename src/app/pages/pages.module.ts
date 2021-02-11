import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
//pipes
import { PipesModule } from '../pipes/pipes.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graphic1Component,
    AccountSettingsComponent,
    PromiseComponent,
    RxjsComponent,
    ProfileComponent,
  ],
  exports: [DashboardComponent, ProgressComponent, Graphic1Component],
  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ComponentsModule,
    PipesModule,
  ],
})
export class PagesModule {}
