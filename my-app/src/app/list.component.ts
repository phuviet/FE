import { Component, OnInit, Input } from '@angular/core';

import { Member } from './member'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./app.component.css']
})

export class ListComponent implements OnInit{
  // @Input() data: any;
  data: any;

  constructor(){
    this.data = [];
  }

  ngOnInit(){

  }

}
