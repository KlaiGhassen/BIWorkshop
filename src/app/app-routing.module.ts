import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidencesComponent } from './Resdinces/residences/residences.component';
import { AppartmentsComponent } from './Apartments/appartments/appartments.component';
import { ApartmentsByResidenceComponent } from './Apartments/apartments-by-residence/apartments-by-residence.component';
import { ResidenceDetailsComponent } from './Resdinces/residence-details/residence-details.component';
import { AddApartmentComponent } from './Apartments/add-apartment/add-apartment.component';
import { AddResidenceComponent } from './Resdinces/add-residence/add-residence.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'residences', component: ResidencesComponent },
  {
    path: 'apartments',
    component: AppartmentsComponent,
  },
  { path: 'apartments/:id', component: ApartmentsByResidenceComponent },
  { path: 'residences/:id', component: ResidenceDetailsComponent },
  { path: 'add-apartment', component: AddApartmentComponent },
  { path: 'add-residence', component: AddResidenceComponent },
  { path: 'updateResidence/:id', component: AddResidenceComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
