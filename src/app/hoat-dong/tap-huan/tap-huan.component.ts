import { Component, OnDestroy, OnInit } from '@angular/core';
import { notifications } from 'src/app/Services/notifications.service';
import { Title } from 'src/app/Services/title.service';

@Component({
  selector: 'app-tap-huan',
  templateUrl: './tap-huan.component.html',
  styleUrls: ['./tap-huan.component.css']
})
export class TapHuanComponent implements OnInit, OnDestroy{
  constructor(private noti: notifications, private title: Title){

  }

  ngOnInit() {
    for(let i=0; i < this.noti.notis.length; i++){
      this.notiCopy[i] = this.noti.notis[i];
    }
    this.title.changeTitle('Tập huấn khảo thí');
  }

  ngOnDestroy(){
    this.title.resetTitle();
  }

  notiCopy: {id:string, actTag:string, testsTag: string, title: string, date: string, img: string, short: string}[] = [];
}
