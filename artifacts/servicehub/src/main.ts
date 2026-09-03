import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import 'zone.js';
import { AppComponent } from './app/app.component';
import { HomeComponent, ServicesComponent, ProviderDetailComponent, BookServiceComponent, BookingsComponent, DashboardComponent, ProfileComponent } from './app/pages';
import './styles.css';

const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'services', component:ServicesComponent },
  { path:'services/:id', component:ProviderDetailComponent },
  { path:'book-service', component:BookServiceComponent },
  { path:'bookings', component:BookingsComponent },
  { path:'dashboard', component:DashboardComponent },
  { path:'profile', component:ProfileComponent },
  { path:'**', redirectTo:'' }
];

bootstrapApplication(AppComponent, {
  providers:[provideRouter(routes)]
}).catch(error => console.error(error));