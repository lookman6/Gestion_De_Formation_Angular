import { Component, OnInit } from '@angular/core';
import { Formations } from 'src/app/models/formations';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-formation-add',
  templateUrl: './formation-add.component.html',
  styleUrls: ['./formation-add.component.scss']
})
export class FormationAddComponent implements OnInit {
formations:any;
formation = new Formations();
  constructor(private formationService:FormationService) { }

  ngOnInit(): void {

    this.getFormationData();
  }

   getFormationData()
  {
    this.formationService.getData().subscribe(res => {
      this.formations = res;
    });
  }

  insertData()
  {
    this.formationService.insert(this.formation).subscribe(res => {
      this.getFormationData();
    })
  }

}
