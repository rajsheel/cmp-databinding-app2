import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output('startGameEvent') startGameEvent = new EventEmitter<number>();

  incrementMe: number = 0;
  myInterval: number = 0;

  startGame() {
    
  	this.myInterval = setInterval( () =>  {  
  		this.startGameEvent.emit(this.incrementMe++);
  		},
  		1000);
  
  }  	

  
  
  stopGame() {
  	clearInterval(this.myInterval);
  }
}
