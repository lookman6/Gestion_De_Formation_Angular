import { Component, OnInit } from '@angular/core';
import { GroupePersonnelService } from 'src/app/services/groupe-personnel.service';

@Component({
  selector: 'app-groupe-personnels',
  templateUrl: './groupe-personnels.component.html',
  styleUrls: ['./groupe-personnels.component.scss']
})
export class GroupePersonnelsComponent implements OnInit {
  groupePersonnels:any;

  constructor(private groupePersonnelService:GroupePersonnelService) { }

  ngOnInit(): void {
    this.getGroupePersonnelData();
  }

  getGroupePersonnelData()
  {
    this.groupePersonnelService.getData().subscribe(res => {
      this.groupePersonnels = res;
    });
  }

}
