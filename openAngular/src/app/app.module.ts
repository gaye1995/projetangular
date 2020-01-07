import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselConfig } from 'ngx-bootstrap/carousel';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FormsModule } from  "@angular/forms";
import { AboutService } from 'src/services/about.service';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ConnaitreComponent } from './connaitre/connaitre.component';
import {Routes, RouterModule} from '@angular/Router';
import { Route } from '@angular/compiler/src/core';
import { SommenousComponent } from './sommenous/sommenous.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AvisComponent } from './avis/avis.component';
const routes:Routes=[
  {path:'formulaire', component:FormulaireComponent},
  {path:'contacts', component:ContactsComponent},
  {path:'about', component:AboutComponent},
  {path:'connaitre', component:ConnaitreComponent},
{path:'sommenous',component: SommenousComponent},
{path:'avis',component: AvisComponent},

  {path:'',redirectTo:'/contacts',pathMatch:'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,
    FormulaireComponent,
    ConnaitreComponent,
    SommenousComponent,
    AvisComponent,
    
  ],
  imports: [
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    BrowserModule,FormsModule,RouterModule.forRoot(routes), BrowserAnimationsModule,
  ],
  providers: [AboutService, {provide: CarouselConfig, useValue: {interval:1500, noPause: true,showIndicators: true}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
