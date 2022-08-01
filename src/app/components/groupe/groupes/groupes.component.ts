import { Component, OnInit } from '@angular/core';
import { GroupeService } from 'src/app/services/groupe.service';

@Component({
  selector: 'app-groupes',
  templateUrl: './groupes.component.html',
  styleUrls: ['./groupes.component.scss']
})
export class GroupesComponent implements OnInit {
  groupes:any;

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

}
