import {NgModule} from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { FormsModule } from '@angular/forms';

// ng2-charts
import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';

// Temporal
import { IncrementerComponent } from '../components/incrementer/incrementer.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementerComponent,
    GraficoDonaComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule
  ]
})

export class PagesModule {}
