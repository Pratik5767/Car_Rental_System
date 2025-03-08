import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
    selector: 'app-post-car',
    templateUrl: './post-car.component.html',
    styleUrls: ['./post-car.component.scss']
})
export class PostCarComponent {

    postCarForm!: FormGroup;
    isSpinning: boolean = false;
    selectedFile!: File | null;
    imagePreview!: string | ArrayBuffer | null;
    listOfOption: Array<{ label: string; value: string }> = [];
    listOfBrands = ["BMW", "AUDI", "FERRARI", "TESLA", "TOYOTA", "HONDA", "FORD", "NISSAN", "HYUNDIA", "LEXUS", "KIA"];
    listOfType = ["PETROL", "HYBRID", "DIESEL", "ELECTRIC", "CNG"];
    listOfColor = ["RED", "WHITE", "BLUE", "BLACK", "ORANGE", "GREY", "SILVER"];
    listOfTransmission = ["MANUAL", "AUTOMATIC"];

    constructor(
        private fb: FormBuilder,
        private adminService: AdminService,
        private message: NzMessageService,
        private router: Router
    ) { }

    ngOnInit() {
        this.postCarForm = this.fb.group({
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
    }

    postCar() {
        console.log(this.postCarForm.status); // Should log 'VALID'
        console.log(this.postCarForm.errors); // Should log 'null'
        console.log(this.postCarForm.get('image')?.errors); // Should log 'null'

        if (this.postCarForm.valid) {
            this.isSpinning = true;
            console.log(this.postCarForm.value);

            const formData: FormData = new FormData();
            formData.append('image', this.selectedFile as Blob);
            formData.append('brand', this.postCarForm.get('brand')?.value);
            formData.append('name', this.postCarForm.get('name')?.value);
            formData.append('type', this.postCarForm.get('type')?.value);
            formData.append('color', this.postCarForm.get('color')?.value);
            formData.append('transmission', this.postCarForm.get('transmission')?.value);
            formData.append('description', this.postCarForm.get('description')?.value);
            formData.append('price', this.postCarForm.get('price')?.value);
            formData.append('modelYear', this.postCarForm.get('modelYear')?.value)

            for (const [key, value] of (formData as any).entries()) {
                if (value instanceof File) {
                    console.log(`${key}: ${value.name} (${value.size} bytes, ${value.type})`);
                } else {
                    console.log(`${key}: ${value}`);
                }
            }

            this.adminService.postCar(formData).subscribe((res) => {
                this.isSpinning = false;
                this.message.success("Car Posted Successfully", { nzDuration: 5000 });
                this.router.navigateByUrl("/admin/dashboard");
                console.log(res);
            }, error => {
                this.isSpinning = false;
                this.message.error("SomeThing went wrong while posting car", { nzDuration: 5000 });
                console.log("Error details", error);
            })
        } else {
            this.message.error("Please fill all the required fields", { nzDuration: 5000 });
            this.postCarForm.markAllAsTouched();
        }

        console.log(this.postCarForm.status); // Should log 'VALID'
        console.log(this.postCarForm.errors); // Should log 'null'
        console.log(this.postCarForm.get('image')?.errors); // Should log 'null'
    }

    onFileSelected(event: any) {
        this.selectedFile = event.target.files[0];
        if (this.selectedFile) {
            this.postCarForm.patchValue({ image: this.selectedFile });
            this.postCarForm.get('image')?.updateValueAndValidity();
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