import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-carousell',
  templateUrl: './skills-carousell.component.html',
  styleUrls: ['./skills-carousell.component.css']
})
export class SkillsCarousellComponent implements OnInit {
  index_page = 0;
  constructor() { }

  ngOnInit(): void {
  }


  selectPage(event:any){
    const objecto = document.getElementById(event.currentTarget.id);
    console.log("Sono dentro il selectPage con indice:" + event.currentTarget.id);
    // this.index_page = 1;
    // this.index_page = 2;
    // this.index_page = 3;
    // this.index_page = 4;
    // this.index_page = 5;
  }

  hideSubMenu(event:any){
    console.log("Entro con:" + event.currentTarget.id);
    if(event.currentTarget.id == "frontend" || event.currentTarget.id == "backend" || event.currentTarget.id == "uix"){
    const objecto = document.getElementById(event.currentTarget.id);
    
    if(objecto){
      console.log(objecto.children);
      if(objecto.children[1].className == "nascosta"){
      objecto.children[1].className = "mostra";
      }else{
        objecto.children[1].className = "nascosta";
      }
      console.log(objecto.children[1]);
    }
  }
  }

}

