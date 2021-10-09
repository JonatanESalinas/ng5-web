import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number = 4;
  bntText: string = 'Add an item';
  goalText: string = 'My first life goal';
  goals: string[] = [];

  constructor() { }

  //Life-cycle hook which is initiated when the app loads.
  //cuando el componente se carga, se ejecuta esto:
  ngOnInit() {
    this.itemCount = this.goals.length;
  }

  addItem(){
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
  }
}
