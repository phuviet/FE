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
    this.objTrainer = null;

    setTimeout( () => {
      this.trainersService.getDetailTrainer().subscribe((data: any) => {
        for(let objTrainer of data.trainers) {
          if(objTrainer.id == this.idTrainer) {
            this.objTrainer = objTrainer;
          }
        }
      });
    });
  }
}
