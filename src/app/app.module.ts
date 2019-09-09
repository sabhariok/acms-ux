import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login.component';
// import { OverviewComponent } from './components/overview.component';

import {
  MatInputModule, MatButtonModule,
  MatSelectModule, MatIconModule, MatExpansionModule,
  MatCardModule, MatDividerModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { StickyComponent } from './components/sticky.component';
import { DrawComponent } from './agents/draw/draw.component';
import { RatesComponent } from './agents/rates/rates.component';
import { ConsumablesComponent } from './agents/consumables/consumables.component';
import { MileageComponent } from './agents/mileage/mileage.component';
import { BizhelpComponent } from './agents/bizhelp/bizhelp.component';
import { SubsidiesComponent } from './agents/subsidies/subsidies.component';
import { NoticesComponent } from './agents/notices/notices.component';
import { GeneralComponent } from './agents/general/general.component';
import { NavBarComponent } from './misc/nav-bar/nav-bar.component';
import { LeftNavComponent } from './misc/left-nav/left-nav.component';
import { HeaderComponent } from './misc/header/header.component';
import { AgentLandingComponent } from './agents/agent-landing/agent-landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabHeaderComponent } from './misc/tab-header/tab-header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GeneralComponent,
    StickyComponent,
    DrawComponent,
    RatesComponent,
    ConsumablesComponent,
    MileageComponent,
    BizhelpComponent,
    SubsidiesComponent,
    NoticesComponent,
    GeneralComponent,
    NavBarComponent,
    LeftNavComponent,
    HeaderComponent,
    AgentLandingComponent,
    TabHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
