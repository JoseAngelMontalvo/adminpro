import { NgModule } from '@angular/core';
//modules
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//components
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumsComponent,
    NopagefoundComponent,
  ],
  imports: [RouterModule, CommonModule],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumsComponent,
    NopagefoundComponent,
  ],
})
export class SharedModule {}
