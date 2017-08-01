import { Component } from '@angular/core'

export class TrainersService {

  trainers: any;

  constructor() {
    this.trainers = [
    {
      name: 'Kien NT',
      img: '',
      birthday: '20/2/1992',
      team: 'Ruby'
    },
    {
      name: 'Vix Kun',
      img: 'http://baomoi-photo-1.zadn.vn/16/05/29/139/19495215/7_53731.jpg',
      birthday: '',
      team: 'FE'
    },
    {
      name: 'Phien Vin',
      img: '',
      birthday: '20/2/1991',
      team: 'Ruby'
    },
    {
      name: 'Tu Mo',
      img: 'http://a9.vietbao.vn/images/vn999/55/2015/08/20150831-hot-girl-han-quoc-noi-nhu-con-vi-duong-cong-goi-cam-2.jpg',
      birthday: '',
      team: 'PHP'
    }
    ];
  }

  getDetailTrainer(id: number) {
    return this.trainers[id];
  }

  getAllTrainers() {
    return this.trainers;
  }
}