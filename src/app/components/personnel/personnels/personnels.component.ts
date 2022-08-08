import { Component, OnInit } from '@angular/core';
import { Personnels } from 'src/app/models/personnels';
import { PersonnelService } from 'src/app/services/personnel.service';

@Component({
  selector: 'app-personnels',
  templateUrl: './personnels.component.html',
  styleUrls: ['./personnels.component.scss']
})
export class PersonnelsComponent implements OnInit {
  personnels:any;
  personnel = new Personnels();

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

  deletePersonnel(id:BigInt)
  {
    this.personnelService.delete(id).subscribe(res => {
      this.getPersonneldata();
    })
  }

}
