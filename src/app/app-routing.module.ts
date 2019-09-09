import { AgentLandingComponent } from './agents/agent-landing/agent-landing.component';
import { BizhelpComponent } from './agents/bizhelp/bizhelp.component';
import { MileageComponent } from './agents/mileage/mileage.component';
import { ConsumablesComponent } from './agents/consumables/consumables.component';
import { DrawComponent } from './agents/draw/draw.component';
import { GeneralComponent } from './agents/general/general.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login.component';
import { RatesComponent } from './agents/rates/rates.component';
import { SubsidiesComponent } from './agents/subsidies/subsidies.component';
import { NoticesComponent } from './agents/notices/notices.component';
// import { OverviewComponent } from '../components/overview.component';

const routes: Routes = [
  {
    path: '',
    component: AgentLandingComponent,
  },
  {
    path: 'landing',
    component: AgentLandingComponent,
  },
  {
    path: 'draw',
    component: DrawComponent,
  },
  {
    path: 'rates',
    component: RatesComponent,
  },
  {
    path: 'consumables',
    component: ConsumablesComponent,
  },
  {
    path: 'mileages',
    component: MileageComponent,
  },
  {
    path: 'bizhelp',
    component: BizhelpComponent,
  },
  {
    path: 'subsidy',
    component: SubsidiesComponent,
  },
  {
    path: 'notices',
    component: NoticesComponent,
  },
  {
    path: '**',
    component: GeneralComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
