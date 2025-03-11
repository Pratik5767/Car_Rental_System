import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-book-car',
    templateUrl: './book-car.component.html',
    styleUrls: ['./book-car.component.scss']
})
export class BookCarComponent {

    car: any;
    carId: number = this.activateRoute.snapshot.params['id'];
    bookACarForm!: FormGroup;
    isSpinning: boolean = false;

    constructor(
        private customerService: CustomerService,
        private message: NzMessageService,
        private activateRoute: ActivatedRoute,
        private fb: FormBuilder,
    ) {
        this.bookACarForm = this.fb.group({
            fromDate: [null, Validators.required],
            toDate: [null, Validators.required]
        });
        this.getCarById();
    }

    getCarById() {
        this.customerService.getCarById(this.carId).subscribe((res) => {
            console.log(res)
            res.processedImg = 'data:image/jpeg;base64,' + res.returnedImage;
            this.car = res;
        });
    }
}