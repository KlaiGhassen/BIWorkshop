import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Residence } from 'src/app/core/models/Residence';
import { ResidencesService } from 'src/app/core/services/residences.service';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css'],
})
export class ResidenceDetailsComponent {
  residence!: Residence;
  idResidence!: number;
  constructor(
    private _rs: ResidencesService,
    private activetedRoute: ActivatedRoute,
    private _router: Router
  ) {
    this.idResidence = parseInt(this.activetedRoute.snapshot.params['id']);
    this.residence = this._rs.listResidences.find(
      (residence) => residence.id === this.idResidence
    )!;
  }
  next(): void {
    this.idResidence = this.idResidence + 1;
    this.residence = this._rs.listResidences.find(
      (residence) => residence.id === this.idResidence
    )!;
  }
  addResidence() {
    this._router.navigate(['/add-residence']);
  }
  updateResidence() {
    this._router.navigate(['/updateResidence', this.idResidence]);
  }
}
