import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  private isActive: boolean;
  constructor() { }

  ngOnInit(): void {
    this.isActive = false;
  }
  public toggleHelp():void{
    this.isActive = !this.isActive;
  }

  public getIsActive():boolean{
    return this.isActive;
  }
}
