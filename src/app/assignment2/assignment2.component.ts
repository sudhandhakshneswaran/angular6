import { Component, OnInit } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';

@Component({
  
  //selector: '[app-servers]',
  selector: 'assignment-2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class assignment2Component implements OnInit 
{
  buttonvalue = true;
  userName = '';

  ngOnInit() {
  }

  enablebtn()
  {
    this.buttonvalue = false;
  }
  
  reset()
  {
    this.userName = '';
    this.disablebtn();
    
  }
  disablebtn()
  {
    this.buttonvalue = true;
  }
}