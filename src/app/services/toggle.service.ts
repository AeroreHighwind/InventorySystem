import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {

  private isActive:boolean = false;


  public toggle():void{
    this.isActive = !this.isActive;
  }

  public getIsActive():boolean{
    return this.isActive;
  }
}
