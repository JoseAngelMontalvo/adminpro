import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//plugins
import { ChartsModule } from 'ng2-charts';
//components
import { IncreasingComponent } from './increasing/increasing.component';
import { GraphicdonaComponent } from './graphicdona/graphicdona.component';

@NgModule({
  declarations: [IncreasingComponent, GraphicdonaComponent],
  exports: [IncreasingComponent, GraphicdonaComponent],
  imports: [FormsModule, ChartsModule],
})
export class ComponentsModule {}
