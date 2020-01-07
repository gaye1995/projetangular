import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sommenous',
  templateUrl: './sommenous.component.html',
  styleUrls: ['./sommenous.component.css']
})
export class SommenousComponent implements OnInit {

  constructor() { }
  infos:{nom: String,prenom: String,tel:Number,email:String}={nom:'mboup',prenom:'Gaye',tel:624558921,email:'gayegayemboup@gmail.com'};

  ngOnInit() {
  }

}
