import { Component } from '@angular/core';
import { TrainersService } from './trainers.service'

@Component({
  selector: 'app-list',
  templateUrl: './list-trainers.component.html',
  styleUrls: ['./app.component.css']
})

export class ListTrainersComponent {

  trainers: any;

  constructor(private trainersService : TrainersService) {
    this.trainersService.getAllTrainers().subscribe((data: any) => {
      this.trainers = data.trainers;
    });
    // this.trainers = this.trainersService.getAllTrainers();
  }
}
