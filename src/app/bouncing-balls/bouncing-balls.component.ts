import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bouncing-balls',
  templateUrl: './bouncing-balls.component.html',
  styleUrls: ['./bouncing-balls.component.css']
})
export class BouncingBallsComponent implements OnInit {
  @Input() public top: string; 
  @Input() public bottom: string; 
  @Input() public left: string; 
  @Input() public right: string; 
  @Input() public icon: string; 
  @Input() public width: string; 
  @Input() public height: string; 
  constructor() { }

  ngOnInit(): void {
    console.log(this.top);
  }

}
