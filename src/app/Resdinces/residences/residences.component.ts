import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Residence } from 'src/app/core/models/Residence';
import { ResidencesService } from 'src/app/core/services/residences.service';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css'],
})
export class ResidencesComponent {
  constructor(private _router: Router, private _rs: ResidencesService) {}
  searchInput: string = '';
  listResidences: Residence[] = this._rs.listResidences;
  filterResidence() {
    this.listResidences = this.listResidences.filter((residence) => {
      return residence.address
        .toLowerCase()
        .includes(this.searchInput.toLowerCase());
    });
    console.log(this.listResidences);
  }

  listResidencesFavs: Residence[] = [];

  showLocation(item: Residence): void {
    alert(`The residence is located in ${item.address}`);
  }
  addFavList(item: Residence): void {
    this.listResidencesFavs.push(item);
  }
  showDetails(item: Residence) {
    this._router.navigate(['/residences', item.id]);
  }
}
