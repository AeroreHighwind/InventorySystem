import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HelpComponent } from './help/help.component';




@NgModule({
  declarations: [
    NavBarComponent,
    HelpComponent
    
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavBarComponent,
    HelpComponent

  ]
})
export class SharedModule { }
