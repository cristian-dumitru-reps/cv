import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personalit',
  templateUrl: './personalit.component.html',
  styleUrls: ['./personalit.component.css']
})
export class PersonalitComponent implements OnInit {
   showOffc:boolean = false;
  constructor() { 
    
  }

  ngOnInit(): void {
  }

  onHoverCustom(){
    console.log("Showing more bro");
    this.showOffc = true;
  }

}
