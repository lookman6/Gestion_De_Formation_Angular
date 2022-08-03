import { Component, OnInit } from '@angular/core';
import { CabinetExternes } from 'src/app/models/cabinet-externes';
import { CabinetService } from 'src/app/services/cabinet.service';

@Component({
  selector: 'app-cabinets',
  templateUrl: './cabinets.component.html',
  styleUrls: ['./cabinets.component.scss']
})
export class CabinetsComponent implements OnInit {
cabinets:any;
cabinet = new CabinetExternes();

  constructor(private cabinetService: CabinetService) { }

  ngOnInit(): void {
  }

  getCabinetData()
  {
    this.cabinetService.getData().subscribe(res => {
      this.cabinets = res;
    });
  }

  deleteCabinet(id:BigInt)
  {
    this.cabinetService.delete(id).subscribe(res => {
      this.getCabinetData();
    })
  }

}
