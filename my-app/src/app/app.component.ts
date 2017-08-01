import { Component, ViewChild, OnInit } from '@angular/core';

import { ListTrainersComponent } from './list-trainers.component'
import { DetailTrainerComponent } from './details-trainer.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  @ViewChild(ListTrainersComponent) list_trainer: any;
  @ViewChild(DetailTrainerComponent) detail_trainer: any;

  id: any;

  constructor() {

  }

  ngOnInit() {
    this.list_trainer.sendIndex = (id: any) => {
      this.id = id;
    }
  }
}
