import { Injectable } from '@angular/core';

@Injectable()

export class ActionsService {
	
	private first_term;;
	private second_term;
	private operator;
	private result;
	private ans;
	
	constructor() { 

	}

	hear(view: string) : void{
		for(let i=0; i<10; i++){
			if(view==""+i || view=="."){
				this.setDigit(view);
				break;
			}
		}
		if(view == 'Backspace'){
			this.clearLastEntry();
		}else if(view == 'Delete' || view == 'Escape'){
			this.clearAll();
		}else if( view=="+" || view =="-" || view == "*" || view=="/" || view == "x"){
			if(view=="*"){ view="x";}
			if(view=="/"){ view="÷"; }
			this.setOperator(view);
		}else if(view == "Enter"){
			this.solve();
		}
	}

	setDigit(view: string) : void{
		if(this.isFirstTerm()){
			if(this.isFirstDigit(1)){
				this.first_term = +view;
			}else{
				let str=""+this.first_term;
				this.first_term+=view;
			}
		}else{
			if(this.isFirstDigit(2)){
				this.second_term = +view;
			}else{
				let str=""+this.first_term;
				this.second_term+=view;
			}	
		}
	}

	setOperator(view: string): void{
		if(!this.isFirstDigit(1) && !this.isFirstDigit(2) && this.isOperatorSet()){
			this.solve();
			this.first_term = this.ans;
			delete this.operator;
			delete this.second_term;
			this.setOperator(view);
		}else{
			/*if(this.isAnsSet() && this.isFirstDigit(1) ){ 
				console.log('kk');
				this.first_term=this.ans;
				delete this.operator;
				delete this.second_term;
			}*/
			if(view=="-"){
				if(this.isFirstDigit(1)){
					this.first_term="-";
				}else if(this.isOperatorSet() && this.isFirstDigit(2)){
					this.second_term="-";
				}else{
					this.operator=view;
				}
			}else{ this.operator = view; }
		}
	}

	solve(): void{
		if(this.isFirstDigit(2)){
			this.result=this.first_term;
		}else{
			if(this.operator=="+"){
				this.first_term=1*(+this.first_term)+0;
				this.second_term=1*(+this.second_term)+0;
				this.result=+this.first_term+this.second_term;
			}else if(this.operator=='-'){
				this.result=this.first_term-this.second_term;
			}else if(this.operator=='x'){
				this.result=this.first_term*this.second_term;
			}else{
				this.result=this.first_term/this.second_term;
			}
		}
		this.ans= this.result ;
	}

	clearLastEntry() : void{
		if(!this.isFirstDigit(2)){
			let str=""+this.second_term;
			let n = str.length-1;
			if(n==0){
				delete this.second_term;
			}else{
				this.second_term = +str.substr(0, n);
			}
		}else if(this.isOperatorSet()){
			delete this.operator;
		}else if(!this.isFirstDigit(1)){
			let str=""+this.first_term;
			let n = str.length-1;
			if(n==0){
				delete this.first_term;
			}else{
				this.first_term = +str.substr(0, n);
			}	
		}	
	}

	clearAll() : void{
		this.resetDisplay();
		delete this.result;
	}
	resetDisplay(): void{
		delete this.first_term;
		delete this.second_term;
		delete this.operator;	
	}
	Ans() : void{
		if(this.isFirstDigit(2) && this.isOperatorSet() && !this.isFirstDigit(1)){
			this.second_term = this.ans;
		}else if(this.isFirstDigit(1)){
			this.first_term= this.ans;
		}else if(typeof this.result != 'undefined'){
			this.resetDisplay();
			this.first_term=this.ans;
		}
	}

	private isFirstTerm() : boolean{
		return (typeof this.operator == 'undefined');
	}

	private isOperatorSet() : boolean{
		return !this.isFirstTerm();
	}

	private isAnsSet() : boolean {
		return (typeof this.ans != 'undefined');
	}

	private isFirstDigit(term: number) : boolean{
		if(term==1){
			return (typeof this.first_term == 'undefined');
		}else{
			return (typeof this.second_term == 'undefined');
		}
	}

	getFirstTerm() : number{
		return this.first_term;
	}

	getOperator() : string{
		return this.operator;
	}

	getSecondTerm() : number{
		return this.second_term;
	}

	getResult() : number{
		return this.result;
	}

}
