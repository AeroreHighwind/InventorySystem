import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private isActive: boolean;

  ngOnInit(): void {
   this.isActive = true;
  }

  public navBarSwitch():void{
    this.isActive = !this.isActive;
  }

  public getSwitchStatus():boolean{
    return this.isActive;
  }
}
