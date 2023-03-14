import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menuClick():void{
    const navUl = document.getElementById('navUL');
      if (navUl.style.display === 'none'){
        navUl.style.display ='flex';
        navUl.style.flexDirection='column';
      }
      else
      navUl.style.display ='none';
    
    
  }
}
