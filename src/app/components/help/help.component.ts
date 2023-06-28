import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const openButton = document.getElementById('open-popup');
    const closeButton = document.getElementById('close-popup');
    const popupOverlay = document.getElementById('popup-overlay');

    openButton.addEventListener('click', function () {
      popupOverlay.classList.add('show');
    });

    closeButton.addEventListener('click', function () {
      popupOverlay.classList.remove('show');
      
    });
  }

}
