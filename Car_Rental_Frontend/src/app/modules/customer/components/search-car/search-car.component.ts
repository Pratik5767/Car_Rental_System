import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';

@Component({
    selector: 'app-search-car',
    templateUrl: './search-car.component.html',
    styleUrls: ['./search-car.component.scss']
})
export class SearchCarComponent {

    cars: any = [];

    isSpinning: boolean = false;
    validateForm!: FormGroup;
    listOfOption: Array<{ label: string; value: string }> = [];
    listOfBrands = ["BMW", "AUDI", "FERRARI", "TESLA", "TOYOTA", "HONDA", "FORD", "NISSAN", "HYUNDIA", "LEXUS", "KIA"];
    listOfType = ["PETROL", "HYBRID", "DIESEL", "ELECTRIC", "CNG"];
    listOfColor = ["RED", "WHITE", "BLUE", "BLACK", "ORANGE", "GREY", "SILVER"];
    listOfTransmission = ["MANUAL", "AUTOMATIC"];

    constructor(private fb: FormBuilder, private customerService: CustomerService) {
        this.validateForm = this.fb.group({
            brand: [null],
            type: [null],
            color: [null],
            transmission: [null],
        })
    }

    searchCar() {
        this.isSpinning = true;
        this.customerService.searchCar(this.validateForm.value).subscribe((res) => {
            this.isSpinning = false;
            console.log(res);
            res.carDtoList.forEach((element: any) => {
                element.processedImg = 'data:image/jpeg;base64,' + element.returnedImage;
                this.cars.push(element);
            });
        })
    }

}
