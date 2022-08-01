import { Component, OnInit } from '@angular/core';
import { Seances } from 'src/app/models/seances';
import { SeanceService } from 'src/app/services/seance.service';

@Component({
  selector: 'app-seance-add',
  templateUrl: './seance-add.component.html',
  styleUrls: ['./seance-add.component.scss']
})
export class SeanceAddComponent implements OnInit {
seances:any;
seance = new Seances();
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

  insertData()
  {
    this.seanceService.insert(this.seance).subscribe(res => {
      this.getSeanceData();
    })
  }

}
