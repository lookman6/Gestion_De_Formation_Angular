import { Component, OnInit } from '@angular/core';
import { PersonnelService } from 'src/app/services/personnel.service';
import {Personnels} from "../../../models/personnels";

@Component({
  selector: 'app-personnels',
  templateUrl: './personnels.component.html',
  styleUrls: ['./personnels.component.scss']
})
export class PersonnelsComponent implements OnInit {
  personnels:any;
  personnel = Personnels;

  constructor(private personnelService:PersonnelService) { }

  ngOnInit(): void {
    this.getPersonneldata();
  }

  getPersonneldata()
  {
    this.personnelService.getData().subscribe(res => {
      this.personnels = res;
    });
  }

}
