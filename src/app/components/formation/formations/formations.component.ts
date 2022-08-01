import { Component, OnInit } from '@angular/core';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent implements OnInit {
  formations:any;

  constructor(private formationService: FormationService) { }

  ngOnInit(): void {
    this.getFormationData();
  }

  getFormationData()
  {
    this.formationService.getData().subscribe(res => {
      this.formations = res;
    });
  }

}
