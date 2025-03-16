import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { NgZorroImportsModules } from 'src/app/NgZorroImportsModules';
import { BookCarComponent } from './components/book-car/book-car.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetBookingsComponent } from './components/get-bookings/get-bookings.component';
import { SearchCarComponent } from './components/search-car/search-car.component';


@NgModule({
  declarations: [
    CustomerDashboardComponent,
    BookCarComponent,
    GetBookingsComponent,
    SearchCarComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    NgZorroImportsModules,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CustomerModule { }