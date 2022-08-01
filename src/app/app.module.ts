import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/user/users/users.component';
import { FormateursComponent } from './components/formateurs/formateurs.component';
import { PersonnelsComponent } from './components/personnel/personnels/personnels.component';
import { GroupesComponent } from './components/groupe/groupes/groupes.component';
import { GroupePersonnelsComponent } from './components/groupePersonnel/groupe-personnels/groupe-personnels.component';
import { FormationsComponent } from './components/formation/formations/formations.component';
import { SallesComponent } from './components/salle/salles/salles.component';
import { SeancesComponent } from './components/seance/seances/seances.component';
import { CategoriesComponent } from './components/categorie/categories/categories.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { FormateurEditComponent } from './components/formateur/formateur-edit/formateur-edit.component';
import { GroupeEditComponent } from './components/groupe/groupe-edit/groupe-edit.component';
import { PersonnelEditComponent } from './components/personnel/personnel-edit/personnel-edit.component';
import { GroupePersonnelEditComponent } from './components/groupePersonnel/groupe-personnel-edit/groupe-personnel-edit.component';
import { FormationEditComponent } from './components/formation/formation-edit/formation-edit.component';
import { SalleEditComponent } from './components/salle/salle-edit/salle-edit.component';
import { SeanceEditComponent } from './components/seance/seance-edit/seance-edit.component';
import { CategorieEditComponent } from './components/categorie/categorie-edit/categorie-edit.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HeadComponent } from './components/layouts/head/head.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { SidebarComponent } from './components/layouts/sidebar/sidebar.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { FooterScriptsComponent } from './components/layouts/footer-scripts/footer-scripts.component';

import { HttpClientModule } from '@angular/common/http';
import { CabinetsComponent } from './components/cabinet/cabinets/cabinets.component';
import { StatistiquesComponent } from './components/statistiques/statistiques.component';
import { CabinetEditComponent } from './components/cabinet/cabinet-edit/cabinet-edit.component';
import { CategorieAddComponent } from './components/categorie/categorie-add/categorie-add.component';
import { FormateurAddComponent } from './components/formateur/formateur-add/formateur-add.component';
import { FormationAddComponent } from './components/formation/formation-add/formation-add.component';
import { GroupeAddComponent } from './components/groupe/groupe-add/groupe-add.component';
import { PersonnelAddComponent } from './components/personnel/personnel-add/personnel-add.component';
import { SalleAddComponent } from './components/salle/salle-add/salle-add.component';
import { SeanceAddComponent } from './components/seance/seance-add/seance-add.component';
import { CabinetAddComponent } from './components/cabinet/cabinet-add/cabinet-add.component';
import { FormsModule } from '@angular/forms';


const appRoutes: Routes = [
  {path: '', component:WelcomeComponent},
  {path: '/home', component:WelcomeComponent},

  // routes for categories
  {path: '/categories', component:CategoriesComponent},
  {path: '/categoriesEdit', component:CategorieEditComponent},
  {path: '/categoriesAdd', component:CategorieAddComponent},

  // routes for formation
  {path: '/formations', component:FormationsComponent},
  {path: '/formationsEdit', component:FormationEditComponent},
  {path: '/formationsAdd', component:FormationAddComponent},

  // routes for formateur
  {path: '/formateurs', component:FormateursComponent},
  {path: '/formateursEdit', component:FormateurEditComponent},
  {path: '/formateursAdd', component:FormateurAddComponent},

  // routes for personnel
  {path: '/personnels', component:PersonnelsComponent},
  {path: '/personnelsEdit', component:PersonnelEditComponent},
  {path: '/personnelsAdd', component:PersonnelAddComponent},


  // routes for cabinet
  {path: '/cabinets', component:CabinetsComponent},
  {path: '/cabinetsEdit', component:CabinetEditComponent},
  {path: '/cabinetsAdd', component:CabinetEditComponent},

  // routes for seance
  {path: '/seances', component:SeancesComponent},
  {path: '/seancesAdd', component:SeanceAddComponent},
  {path: '/seancesEdit', component:SeanceEditComponent},


  // routes for statistique
  {path: '/statistiques', component:StatistiquesComponent},
  
  
  
  // routes for groupe
  {path: '/groupesAdd', component:GroupeAddComponent},
  {path: '/groupes', component:GroupesComponent},
  {path: '/groupesEdit', component:GroupeEditComponent},


  //roues for salle
  {path: '/salles', component:SallesComponent},
  {path: '/sallesAdd', component:SalleAddComponent},
  {path: '/sallesEdit', component:SalleEditComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    FormateursComponent,
    PersonnelsComponent,
    GroupesComponent,
    GroupePersonnelsComponent,
    FormationsComponent,
    SallesComponent,
    SeancesComponent,
    CategoriesComponent,
    UserEditComponent,
    FormateurEditComponent,
    GroupeEditComponent,
    PersonnelEditComponent,
    GroupePersonnelEditComponent,
    FormationEditComponent,
    SalleEditComponent,
    SeanceEditComponent,
    CategorieEditComponent,
    WelcomeComponent,
    HeadComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    FooterScriptsComponent,
    CabinetsComponent,
    StatistiquesComponent,
    CabinetEditComponent,
    CategorieAddComponent,
    FormateurAddComponent,
    FormationAddComponent,
    GroupeAddComponent,
    PersonnelAddComponent,
    SalleAddComponent,
    SeanceAddComponent,
    CabinetAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
