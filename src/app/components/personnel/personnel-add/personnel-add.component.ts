import { Component, OnInit } from '@angular/core';
import { Personnels } from 'src/app/models/personnels';
import { PersonnelService } from 'src/app/services/personnel.service';
//import { }

@Component({
  selector: 'app-personnel-add',
  templateUrl: './personnel-add.component.html',
  styleUrls: ['./personnel-add.component.scss']
})
export class PersonnelAddComponent implements OnInit {
  
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

  insertData()
  {
    this.personnelService.insert(this.personnel).subscribe(res => {
      this.getPersonneldata();
    });
    /*console.log(this.personnel);*/
  }

}
