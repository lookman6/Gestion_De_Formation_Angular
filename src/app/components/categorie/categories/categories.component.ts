import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
categories:any;

  constructor(private categorieService: CategorieService) { }

  ngOnInit(): void {
    this.getCategoriesData();
  }

  getCategoriesData()
  {
    this.categorieService.getData().subscribe(res => {
      this.categories = res;
    });
  }

  deleteCategorie(id:BigInt)
  {
    this.categorieService.delete(id).subscribe(res => {
      this.getCategoriesData();
    })
  }
  

}
