import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-update-car',
    templateUrl: './update-car.component.html',
    styleUrls: ['./update-car.component.scss']
})
export class UpdateCarComponent {

    carId: number = this.activatedRoute.snapshot.params["id"];
    updateForm!: FormGroup;
    existingImage: string | null = null;
    isSpinning: boolean = false;
    listOfOption: Array<{ label: string; value: string }> = [];
    listOfBrands = ["BMW", "AUDI", "FERRARI", "TESLA", "TOYOTA", "HONDA", "FORD", "NISSAN", "HYUNDIA", "LEXUS", "KIA"];
    listOfType = ["PETROL", "HYBRID", "DIESEL", "ELECTRIC", "CNG"];
    listOfColor = ["RED", "WHITE", "BLUE", "BLACK", "ORANGE", "GREY", "SILVER"];
    listOfTransmission = ["MANUAL", "AUTOMATIC"];

    constructor(
        private adminService: AdminService,
        private activatedRoute: ActivatedRoute,
        private fb: FormBuilder
    ) {
        this.updateForm = this.fb.group({
            name: [null, Validators.required],
            brand: [null, Validators.required],
            type: [null, Validators.required],
            color: [null, Validators.required],
            transmission: [null, Validators.required],
            price: [null, Validators.required],
            description: [null, Validators.required],
            modelYear: [null, Validators.required],
            image: [null, Validators.required],
        })
        this.getCarById();
    }

    getCarById() {
        this.adminService.getCarById(this.carId).subscribe((res) => {
            console.log(res);
            const carDto = res;
            this.existingImage = 'data:image/jpeg;base64,' + res.returnedImage;
            this.updateForm.patchValue(carDto);
        })
    }

}
