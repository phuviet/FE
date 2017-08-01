import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { TrainersService } from './trainers.service'

@Component({
  selector: 'app-detail',
  templateUrl: './detail-trainer.component.html',
  styleUrls: ['./app.component.css']
})

export class DetailTrainerComponent implements OnChanges {

  @Input() idTrainer: number;
  // idTrainer: number;
  objTrainer: any;

  constructor(private trainersService: TrainersService) {
  }

  ngOnInit() {

  }

  ngOnChanges() {
    this.idTrainer;
    this.objTrainer = null;
    setTimeout( () => {
      this.objTrainer = this.trainersService.getDetailTrainer(this.idTrainer);
    });
  }
}
