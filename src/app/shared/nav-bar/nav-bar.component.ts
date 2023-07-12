import { Component, OnInit } from '@angular/core';
import { HelpComponent } from 'src/app/shared/help/help.component';

@Component({
  selector: 'shared-navbar',
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
