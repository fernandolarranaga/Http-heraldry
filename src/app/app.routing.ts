import { Routes, RouterModule } from '@angular/router';
import { BlasonesComponent } from './blasones/blasones.component';
import {BlasonDetailsComponent} from './blason-details/blason-details.component'
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
export const routes: Routes = [
    { path: 'app', component: AppComponent },
    { path: '', component: HeadComponent },
    { path: 'blason', component: BlasonesComponent },
    { path: 'blason/:id', component: BlasonDetailsComponent },
    { path: '**', redirectTo: '' }
];

