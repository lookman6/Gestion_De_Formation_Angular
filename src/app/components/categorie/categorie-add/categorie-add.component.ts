import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/models/categories';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-categorie-add',
  templateUrl: './categorie-add.component.html',
  styleUrls: ['./categorie-add.component.scss']
})
export class CategorieAddComponent implements OnInit {
categories:any
categorie = new Categories();
  constructor(private categorieService:CategorieService) { }

  ngOnInit(): void {
    this.getCategorieData();
  }

   getCategorieData()
  {
    this.categorieService.getData().subscribe(res => {
      this.categories = res;
    });
  }

  insertData()
  {
    this.categorieService.insert(this.categorie).subscribe(res => {
      this.getCategorieData();
    })
  }

}
