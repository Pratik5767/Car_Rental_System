import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
    selector: 'app-get-bookings',
    templateUrl: './get-bookings.component.html',
    styleUrls: ['./get-bookings.component.scss']
})
export class GetBookingsComponent {

    isSpinning: boolean = false;
    bookedCars: any;

    constructor(private adminService: AdminService, private message: NzMessageService) {
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

    changeBookingStatus(bookingId: number, status: string) {
        this.isSpinning = true;
        this.adminService.changeStatus(bookingId, status).subscribe((res) => {
            this.isSpinning = false;
            this.getBookings();
            this.message.success("Status updated successfully", {nzDuration: 5000});
        }, error => {
            this.isSpinning = false;
            this.message.error("Something went wrong while updating status", {nzDuration: 5000});
            console.log(error);
        })
    }
}