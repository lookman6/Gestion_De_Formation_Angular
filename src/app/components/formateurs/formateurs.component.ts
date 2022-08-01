import { Component, OnInit } from '@angular/core';
import { FormateurService } from 'src/app/services/formateur.service';

@Component({
  selector: 'app-formateurs',
  templateUrl: './formateurs.component.html',
  styleUrls: ['./formateurs.component.scss']
})
export class FormateursComponent implements OnInit {
  formateurs:any;

  constructor(private formateurService:FormateurService) { }

  ngOnInit(): void {
    this.getFormateurData();
  }

  getFormateurData()
  {
    this.formateurService.getData().subscribe(res => {
      this.formateurs = res;
    });
  }

}
