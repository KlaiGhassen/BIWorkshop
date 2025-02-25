import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appartments',
  templateUrl: './appartments.component.html',
  styleUrls: ['./appartments.component.css'],
})
export class AppartmentsComponent {
  constructor(private _router: Router) {}
  addAppartment() {
    this._router.navigate(['add-apartment']);
  }
}
