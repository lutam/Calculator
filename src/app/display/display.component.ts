import { Component, OnInit } from '@angular/core';

import { ActionsService } from '../../services/actions.service';


@Component({
  selector: 'display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

 	

  constructor(private actions: ActionsService) { }

  ngOnInit() {
  }

}
