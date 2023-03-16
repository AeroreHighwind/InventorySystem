import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //this.hide();
  }

  menuClick():void{
    const navUl = document.getElementById('navUL');
      if (navUl.style.display === 'none'){
        navUl.style.display ='flex';
        navUl.style.flexDirection='column';
        navUl.style.animation = 'fadeIn 1s forwards'
      }
      else{
        navUl.style.animation = 'fadeOut .8s forwards';
        setTimeout(()=> {
          navUl.style.display = 'none';
       }
       ,500);
        
      }    
  }

  hide():void{
    const navUl = document.getElementById('navUL');
    navUl.style.display='none';
  }
}
