import { Component, OnInit } from '@angular/core';
import { SeanceService } from 'src/app/services/seance.service';

@Component({
  selector: 'app-seances',
  templateUrl: './seances.component.html',
  styleUrls: ['./seances.component.scss']
})
export class SeancesComponent implements OnInit {
  seances:any;

  constructor(private seanceService:SeanceService) { }

  ngOnInit(): void {
    this.getSeanceData();
  }

  getSeanceData()
  {
    this.seanceService.getData().subscribe(res => {
      this.seances = res;
    });
  }
}
