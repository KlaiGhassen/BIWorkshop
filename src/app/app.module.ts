import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppartmentsComponent } from './Apartments/appartments/appartments.component';
import { ApartmentsByResidenceComponent } from './Apartments/apartments-by-residence/apartments-by-residence.component';
import { AddApartmentComponent } from './Apartments/add-apartment/add-apartment.component';
import { ResidencesComponent } from './Resdinces/residences/residences.component';
import { ResidenceDetailsComponent } from './Resdinces/residence-details/residence-details.component';
import { AddResidenceComponent } from './Resdinces/add-residence/add-residence.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, NotFoundComponent, AppartmentsComponent, ApartmentsByResidenceComponent, AddApartmentComponent, ResidencesComponent, ResidenceDetailsComponent, AddResidenceComponent, HomeComponent],
  imports: [FormsModule, BrowserModule, AppRoutingModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
