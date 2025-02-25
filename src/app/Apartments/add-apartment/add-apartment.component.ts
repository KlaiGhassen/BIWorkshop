import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css'],
})
export class AddApartmentComponent {
  apartForm!: FormGroup;
  constructor() {
    this.apartForm = new FormGroup({
      apart_Number: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]+$'),
      ]),
      terrace: new FormControl(false, [Validators.required]),
      surfaceterrace: new FormControl({ value: 0, disabled: true }, [
        Validators.required,
      ]),
      surface: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]+$'),
      ]),

      category: new FormControl('S+1', [Validators.required]),
      ResidenceId: new FormControl(null, [Validators.required]),
      floorNum: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]+$'),
      ]),
    });
  }
  onSubmit() {
    alert('appartment created' + JSON.stringify(this.apartForm.value));
  }
}
