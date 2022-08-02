import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {CategoriesComponent} from "./components/categorie/categories/categories.component";
import {CategorieEditComponent} from "./components/categorie/categorie-edit/categorie-edit.component";
import {CategorieAddComponent} from "./components/categorie/categorie-add/categorie-add.component";
import {FormationsComponent} from "./components/formation/formations/formations.component";
import {FormationEditComponent} from "./components/formation/formation-edit/formation-edit.component";
import {FormationAddComponent} from "./components/formation/formation-add/formation-add.component";
import {FormateursComponent} from "./components/formateurs/formateurs.component";
import {FormateurEditComponent} from "./components/formateur/formateur-edit/formateur-edit.component";
import {FormateurAddComponent} from "./components/formateur/formateur-add/formateur-add.component";
import {PersonnelsComponent} from "./components/personnel/personnels/personnels.component";
import {PersonnelEditComponent} from "./components/personnel/personnel-edit/personnel-edit.component";
import {PersonnelAddComponent} from "./components/personnel/personnel-add/personnel-add.component";
import {CabinetsComponent} from "./components/cabinet/cabinets/cabinets.component";
import {CabinetEditComponent} from "./components/cabinet/cabinet-edit/cabinet-edit.component";
import {SeancesComponent} from "./components/seance/seances/seances.component";
import {SeanceAddComponent} from "./components/seance/seance-add/seance-add.component";
import {SeanceEditComponent} from "./components/seance/seance-edit/seance-edit.component";
import {StatistiquesComponent} from "./components/statistiques/statistiques.component";
import {GroupeAddComponent} from "./components/groupe/groupe-add/groupe-add.component";
import {GroupesComponent} from "./components/groupe/groupes/groupes.component";
import {GroupeEditComponent} from "./components/groupe/groupe-edit/groupe-edit.component";
import {SallesComponent} from "./components/salle/salles/salles.component";
import {SalleAddComponent} from "./components/salle/salle-add/salle-add.component";
import {SalleEditComponent} from "./components/salle/salle-edit/salle-edit.component";


const routes: Routes = [
  {path: '', component:WelcomeComponent},
  {path: 'home', component:WelcomeComponent},

  // routes for categories
  {path: 'categories', component:CategoriesComponent},
  {path: 'categoriesEdit', component:CategorieEditComponent},
  {path: 'categoriesAdd', component:CategorieAddComponent},

  // routes for formation
  {path: 'formations', component:FormationsComponent},
  {path: 'formationsEdit', component:FormationEditComponent},
  {path: 'formationsAdd', component:FormationAddComponent},

  // routes for formateur
  {path: 'formateurs', component:FormateursComponent},
  {path: 'formateursEdit', component:FormateurEditComponent},
  {path: 'formateursAdd', component:FormateurAddComponent},

  // routes for personnel
  {path: 'personnels', component:PersonnelsComponent},
  {path: 'personnelsEdit', component:PersonnelEditComponent},
  {path: 'personnelsAdd', component:PersonnelAddComponent},


  // routes for cabinet
  {path: 'cabinets', component:CabinetsComponent},
  {path: 'cabinetsEdit', component:CabinetEditComponent},
  {path: 'cabinetsAdd', component:CabinetEditComponent},

  // routes for seance
  {path: 'seances', component:SeancesComponent},
  {path: 'seancesAdd', component:SeanceAddComponent},
  {path: 'seancesEdit', component:SeanceEditComponent},


  // routes for statistique
  {path: 'statistiques', component:StatistiquesComponent},



  // routes for groupe
  {path: 'groupesAdd', component:GroupeAddComponent},
  {path: 'groupes', component:GroupesComponent},
  {path: 'groupesEdit', component:GroupeEditComponent},


  //roues for salle
  {path: 'salles', component:SallesComponent},
  {path: 'sallesAdd', component:SalleAddComponent},
  {path: 'sallesEdit', component:SalleEditComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

/*@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})*/
export class AppRoutingModule { }
