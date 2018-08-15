import { Component } from '@angular/core';

import { ActionsService } from '../../services/actions.service';


class Key{
	view: string;
	type: string;

	constructor(_view, _type){
		this.view=_view;
		this.type=_type;
	}

}

const DIGITSSTRUCTURE = 	[	["7","digit"] , ["8","digit"], ["9","digit"], 
								["4","digit"] , ["5","digit"], ["6","digit"],
								["1","digit"] , ["2","digit"], ["3","digit"],
								["0","digit"] , [".","digit"] 	
							];
const OPERATORSSTRUCTURE = [  ["CE", "CE"], ["C", "C"],
                              ["+", "operator"], ["-", "operator"],
                              ["x", "operator"], ["÷", "operator"],
                              ['Ans', "Ans"], ["=", "equal"]
                            ];
@Component({
  selector: 'keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent {
	digits: Key[];
  operators: Key[];
  constructor(private actions : ActionsService) { 
  	this.digits=[];
  	for(let i=0; i<DIGITSSTRUCTURE.length; i++){
  		this.digits[i]= new Key(DIGITSSTRUCTURE[i][0], DIGITSSTRUCTURE[i][1]);
  	}
    this.operators=[];
    for(let i=0; i<OPERATORSSTRUCTURE.length; i++){
      this.operators[i]= new Key(OPERATORSSTRUCTURE[i][0], OPERATORSSTRUCTURE[i][1]);
    }
  }

  pushKey(_key){
  	if(_key.type == 'digit'){
      this.actions.setDigit(_key.view);
  	}else if(_key.type == 'CE'){
		  this.actions.clearLastEntry();
  	}else if(_key.type=='operator'){
      this.actions.setOperator(_key.view);
    }else if(_key.type=='equal'){
      this.actions.solve();
    }else if(_key.type=="C"){
      this.actions.clearAll();
    }else if(_key.type=='Ans'){
      this.actions.Ans();
    }
  }


}
