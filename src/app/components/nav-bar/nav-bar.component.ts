import { Component, OnInit } from '@angular/core';
import { HelpComponent } from '../help/help.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private isActive: boolean;
  private helpComponent:HelpComponent;

  ngOnInit(): void {
   this.isActive = true;
   
  }

  public navBarSwitch():void{
    this.isActive = !this.isActive;
  }

  public getSwitchStatus():boolean{
    return this.isActive;
  }

  public clickHelp():void{
    this.helpComponent.toggleHelp();
  }
}
