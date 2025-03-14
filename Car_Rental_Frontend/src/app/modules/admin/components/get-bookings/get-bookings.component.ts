import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
    selector: 'app-get-bookings',
    templateUrl: './get-bookings.component.html',
    styleUrls: ['./get-bookings.component.scss']
})
export class GetBookingsComponent {

    isSpinning: boolean = false;
    bookedCars: any;

    constructor(
        private adminService: AdminService
    ) {
        this.getBookings();
    }

    getBookings() {
        this.isSpinning = true;
        this.adminService.getBookings().subscribe((res) => {
            this.isSpinning = false;
            console.log(res);
            this.bookedCars = res;
        })
    }
}