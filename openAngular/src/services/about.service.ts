import { Injectable } from '@angular/core';

@Injectable()
export class AboutService{
    info={
        nom: "Mboup",
        prenom: "Gaye",
        email: "gayegayemboup@gmail.com",
        tel: 624558921
      }
      comments=[
      {date: new Date(), message: "trés bonne boutique"},
      {date: new Date(), message: "des bonnes odeurs de parfum"},
      {date: new Date(), message: "j'adore"}
      ];
      addcomment(c){
        c.date= new Date();
          this.comments.push(c);
      }
      getallcomments(){
          return this.comments;
      }
      getinfo(){
          return this.info;
      }
}