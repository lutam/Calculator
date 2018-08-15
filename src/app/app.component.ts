import { Component, HostListener } from '@angular/core';

import {ActionsService } from '../services/actions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private actions: ActionsService){}


	@HostListener('document:keydown', ['$event']) openEars(event: KeyboardEvent) { 
    	this.actions.hear(event.key);

  	}

}

