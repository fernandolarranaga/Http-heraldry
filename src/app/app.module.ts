import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HeraldryService} from './services/heraldry.service'

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlasonesComponent } from './blasones/blasones.component';
import { BlasonDetailsComponent } from './blason-details/blason-details.component';

import { routes } from './app.routing';
import { HeadComponent } from './head/head.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    BlasonesComponent,
    BlasonDetailsComponent,
    HeadComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes), 
    FormsModule

  ],
  providers: [HeraldryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
