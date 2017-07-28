import { Component, Directive } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  trainers: any;
  objTrainer: any;

  constructor(){
    this.trainers = [];
    this.trainers = [
      {
        name: 'Kien NT',
        img: 'http://file.vforum.vn/hinh/2016/07/hot-girl-han-quoc-2016.jpg',
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
        img: 'http://sohanews.sohacdn.com/k:2014/1377142001-song-sinh-4-1402218386890/nhung-hot-girl-han-quoc-nao-dang-lam-mua-lam-gio-tai-chau-a.jpg',
        birthday: '20/2/1991',
        team: 'Ruby'
      },
      {
        name: 'Tu Mo',
        img: 'http://a9.vietbao.vn/images/vn999/55/2015/08/20150831-hot-girl-han-quoc-noi-nhu-con-vi-duong-cong-goi-cam-2.jpg',
        birthday: '',
        team: 'Ruby'
      }
    ];
  }
  showDetail(id: any){
    this.objTrainer = null;
    setTimeout(()=>{
      this.objTrainer = this.trainers[id];
    });
  }
}
