import { Component, OnInit } from '@angular/core';

@Component({
  
  //selector: '[app-servers]',
  selector: 'assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class assignment2Component implements OnInit 
{
  buttonvalue = false;
  userName = '';

  ngOnInit() {
  }

  enablebtn()
  {
    this.buttonvalue = true;
  }
  reset()
  {
    this.userName = '';
    
  }
}