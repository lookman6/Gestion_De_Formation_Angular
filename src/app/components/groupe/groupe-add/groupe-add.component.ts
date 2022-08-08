import { Component, OnInit } from '@angular/core';
import { Groupes } from 'src/app/models/groupes';
import { GroupeService } from 'src/app/services/groupe.service';

@Component({
  selector: 'app-groupe-add',
  templateUrl: './groupe-add.component.html',
  styleUrls: ['./groupe-add.component.scss']
})
export class GroupeAddComponent implements OnInit {

  groupes:any;
  groupe = new Groupes();
  constructor(private groupeService:GroupeService) { }

  ngOnInit(): void {
    this.getGroupeData();
  }

  getGroupeData()
  {
    this.groupeService.getData().subscribe(res => {
      this.groupes = res;
    });
  }

  insertData()
  {
    this.groupeService.insert(this.groupe).subscribe(res => {
      this.getGroupeData();
    })
  }

}
