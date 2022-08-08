import { Component, OnInit } from '@angular/core';
import { CabinetExternes } from 'src/app/models/cabinet-externes';
import { CabinetService } from 'src/app/services/cabinet.service';
import { CabinetsComponent } from '../cabinets/cabinets.component';

@Component({
  selector: 'app-cabinet-add',
  templateUrl: './cabinet-add.component.html',
  styleUrls: ['./cabinet-add.component.scss']
})
export class CabinetAddComponent implements OnInit {
cabinets :any;
cabinet = new CabinetExternes();
  constructor(private cabinetService:CabinetService) { }

  ngOnInit(): void {

    this.getCabinetData();
  }

   getCabinetData()
  {
    this.cabinetService.getData().subscribe(res => {
      this.cabinets = res;
    });
  }

  insertData()
  {
    this.cabinetService.insert(this.cabinet).subscribe(res => {
      this.getCabinetData();
    })
  }

}
