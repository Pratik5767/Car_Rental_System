import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
    selector: 'app-update-car',
    templateUrl: './update-car.component.html',
    styleUrls: ['./update-car.component.scss']
})
export class UpdateCarComponent {

    carId: number = this.activatedRoute.snapshot.params["id"];
    updateForm!: FormGroup;
    isSpinning: boolean = false;
    listOfOption: Array<{ label: string; value: string }> = [];
    listOfBrands = ["BMW", "AUDI", "FERRARI", "TESLA", "TOYOTA", "HONDA", "FORD", "NISSAN", "HYUNDIA", "LEXUS", "KIA"];
    listOfType = ["PETROL", "HYBRID", "DIESEL", "ELECTRIC", "CNG"];
    listOfColor = ["RED", "WHITE", "BLUE", "BLACK", "ORANGE", "GREY", "SILVER"];
    listOfTransmission = ["MANUAL", "AUTOMATIC"];
    selectedFile!: File | null;
    imagePreview!: string | ArrayBuffer | null;
    imageChanged: boolean = false;
    existingImage: string | null = null;

    constructor(
        private adminService: AdminService,
        private activatedRoute: ActivatedRoute,
        private fb: FormBuilder,
        private message: NzMessageService,
        private router: Router
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

    updateCar() {
        this.isSpinning = true;
        const formData: FormData = new FormData();

        if (this.imageChanged && this.selectedFile) {
            formData.append('image', this.selectedFile as Blob);
        }
        formData.append('brand', this.updateForm.get('brand')?.value);
        formData.append('name', this.updateForm.get('name')?.value);
        formData.append('type', this.updateForm.get('type')?.value);
        formData.append('color', this.updateForm.get('color')?.value);
        formData.append('transmission', this.updateForm.get('transmission')?.value);
        formData.append('description', this.updateForm.get('description')?.value);
        formData.append('price', this.updateForm.get('price')?.value);
        formData.append('modelYear', this.updateForm.get('modelYear')?.value)

        this.adminService.updateCar(this.carId, formData).subscribe((res) => {
            console.log(res);
            this.isSpinning = false;
            this.message.success("Car updated successfully", {nzDuration: 5000})
            this.router.navigateByUrl("/admin/dashboard");
        }, error => {
            this.isSpinning = false;
            this.message.error("Something went wrong while updating", {nzDuration: 5000});
            console.log("Error" + error);
        })
    }

    onFileSelected(event: any) {
        this.selectedFile = event.target.files[0];
        if (this.selectedFile) {
            this.imageChanged = true;
            this.existingImage = null;
            this.updateForm.patchValue({ image: this.selectedFile });
            this.updateForm.get('image')?.updateValueAndValidity();
            this.previewImage();
        }
    }

    previewImage() {
        if (this.selectedFile) {
            const reader = new FileReader();
            reader.onload = () => {
                this.imagePreview = reader.result;
            };
            reader.readAsDataURL(this.selectedFile);
        }
    }
}
