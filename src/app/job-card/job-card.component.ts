import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {
  
  @Input() public alignment: number; 
  constructor() { }

  ngOnInit(): void {
  }

}
