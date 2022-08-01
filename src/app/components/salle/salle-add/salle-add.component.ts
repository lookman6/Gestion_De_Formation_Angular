import { Component, OnInit } from '@angular/core';
import { Salles } from 'src/app/models/salles';
import { SalleService } from 'src/app/services/salle.service';

@Component({
  selector: 'app-salle-add',
  templateUrl: './salle-add.component.html',
  styleUrls: ['./salle-add.component.scss']
})
export class SalleAddComponent implements OnInit {

  salles:any;
  salle = new Salles();
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

  insertData()
  {
    this.salleService.insert(this.salle).subscribe(res => {
      this.getSalleData();
    })
  }

}
