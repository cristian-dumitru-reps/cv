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


  selectPage(index:String){
    console.log("Sono dentro il selectPage");
    // this.index_page = 1;
    // this.index_page = 2;
    // this.index_page = 3;
    // this.index_page = 4;
    // this.index_page = 5;
  }

}
