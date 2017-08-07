import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { AppService } from './share/app.service'

@Injectable()
export class TrainersService {

  trainers: Array<string> = [];
  objTrainer: any;

  constructor(
    private http: Http,
    private appService: AppService
    ) {
    // this.http.get('/assets/trainers.json').map(res => res.json()).subscribe((data: any) => {
      //   this.trainers = data.trainers;
      // });
    }

    getDetailTrainer() {
      // return this.trainers[id];
      return this.http.get(this.appService.HOST + '/assets/trainers.json').map(res => res.json());
    }

    getAllTrainers() {
      // return this.trainers;
      return this.http.get(this.appService.HOST + '/assets/trainers.json').map(res => res.json());
    }
  }