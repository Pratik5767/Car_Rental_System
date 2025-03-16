import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-car',
  templateUrl: './search-car.component.html',
  styleUrls: ['./search-car.component.scss']
})
export class SearchCarComponent {

    isSpinning: boolean = false;
    validateForm!: FormGroup;
    listOfOption: Array<{ label: string; value: string }> = [];
    listOfBrands = ["BMW", "AUDI", "FERRARI", "TESLA", "TOYOTA", "HONDA", "FORD", "NISSAN", "HYUNDIA", "LEXUS", "KIA"];
    listOfType = ["PETROL", "HYBRID", "DIESEL", "ELECTRIC", "CNG"];
    listOfColor = ["RED", "WHITE", "BLUE", "BLACK", "ORANGE", "GREY", "SILVER"];
    listOfTransmission = ["MANUAL", "AUTOMATIC"];

    constructor(private fb: FormBuilder) {
        this.validateForm = this.fb.group({
            brand: [null],
            type: [null],
            color: [null],
            transmission: [null],
        })
    }

    searchCar() {
        console.log(this.validateForm.value);
    }
}