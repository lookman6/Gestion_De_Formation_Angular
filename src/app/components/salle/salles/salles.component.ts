import { Component, OnInit } from '@angular/core';
import { SalleService } from 'src/app/services/salle.service';

@Component({
  selector: 'app-salles',
  templateUrl: './salles.component.html',
  styleUrls: ['./salles.component.scss']
})
export class SallesComponent implements OnInit {
  salles:any;

  constructor(private salleService:SalleService) { }

  ngOnInit(): void {
    this.getSalleData();
  }

  getSalleData()
  {
    this.salleService.getData().subscribe(res => {
      this.salles = res;
    });
  }

}
