import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
    selector: 'app-customer-dashboard',
    templateUrl: './customer-dashboard.component.html',
    styleUrls: ['./customer-dashboard.component.scss']
})
export class CustomerDashboardComponent {

    cars: any = [];

    constructor(private customerService: CustomerService) {
        this.getAllCars();
    }

    getAllCars() {
        this.customerService.getAllCars().subscribe((res) => {
            console.log(res)
            res.forEach((element: any) => {
                element.processedImg = 'data:image/jpeg;base64,' + element.returnedImage;
                this.cars.push(element);
            });
        })
    }
}