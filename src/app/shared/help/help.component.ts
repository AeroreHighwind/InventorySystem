import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ToggleService } from '../services/toggle.service';


@Component({
  selector: 'shared-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor(private toggleService:ToggleService) { }

  ngOnInit(): void {
    
  }

  public toggleHelp(): void {
    this.toggleService.toggle();
  }
  
  public isActive():boolean{
    return this.toggleService.getIsActive();
  }

}
