import { Component, OnInit } from '@angular/core';
import { Formateurs } from 'src/app/models/formateurs';
import { FormateurService } from 'src/app/services/formateur.service';

@Component({
  selector: 'app-formateur-add',
  templateUrl: './formateur-add.component.html',
  styleUrls: ['./formateur-add.component.scss']
})
export class FormateurAddComponent implements OnInit {
formateurs:any;
formateur = new Formateurs();
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

  insertData()
  {
    this.formateurService.insert(this.formateur).subscribe(res => {
      this.getFormateurData();
    })
  }

}
