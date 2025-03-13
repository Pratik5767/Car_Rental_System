import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
    selector: 'app-get-bookings',
    templateUrl: './get-bookings.component.html',
    styleUrls: ['./get-bookings.component.scss']
})
export class GetBookingsComponent {

    isSpinning: boolean = false;
    bookedCars: any;


    constructor(
        private customerService: CustomerService
    ) {
        this.getBookings();
    }

    getBookings() {
        this.isSpinning = true;
        this.customerService.getBookingsByUserId().subscribe((res) => {
            this.isSpinning = false;
            console.log(res);
            this.bookedCars = res;
        })
    }

}