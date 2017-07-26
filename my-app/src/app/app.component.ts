import { Component, ViewChild, AfterContentInit } from '@angular/core';

import { ListComponent } from './list.component'
import { FormComponent } from './form.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterContentInit {

  @ViewChild(ListComponent) list: any;
  @ViewChild(FormComponent) form: any;
  members: Array<string>;

  constructor(){
    this.members = [];
  }

  ngOnInit(){
    // this.list.data.push('Viet nguyen P.')
    this.form.newMember = () => {
      this.pushNewMember(this.form.name);
    }
    this.list.deleteMb = (ids: any) => {
      this.list.data.splice(ids, 1);
    }
  }

  pushNewMember(e: any){
    // this.members.push(e);
    this.list.data.push(e);
  }

  ngAfterContentInit(){

  }
}
