import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { AboutService } from 'src/services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
infos:{nom: String,prenom: String,tel:Number,email:String}={nom:'',prenom:'',tel:null,email:''};
comments=[];
commentaire={date: null,message: ""}
  constructor(private aboutservice: AboutService) {
    this.infos=this.aboutservice.getinfo();
    this.comments=this.aboutservice.getallcomments();

   }

  ngOnInit() {
  }
    onAddCommentaire(c){
      this.comments=this.aboutservice.getallcomments();
      this.aboutservice.addcomment(c);
      this.commentaire.message="";
      this.comments=this.aboutservice.getallcomments();
    }
  }