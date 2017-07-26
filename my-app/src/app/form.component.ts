import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./app.component.css']
})

export class FormComponent implements OnInit{

  // @Output() result: any = new EventEmitter();
  name: string;

  constructor(){

  }

  ngOnInit(){

  }

  // newMember(){
  //   this.result.emit(this.name)
  // }
}
