import { Component } from '@angular/core';

import { NgForm, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  members: Array<Object>;
  skills: string;

  constructor(){
    this.members = [];
  }

  addMember(form: NgForm) {
    console.log(form.value);
    this.members.push(form.value);
  }
}
