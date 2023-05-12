import { Component, OnInit, OnDestroy } from '@angular/core';
import { notifications } from '../Services/notifications.service';
import { Title } from '../Services/title.service';

@Component({
  selector: 'app-tin-tuc',
  templateUrl: './tin-tuc.component.html',
  styleUrls: ['./tin-tuc.component.css'],
  providers: [notifications]
})
export class TinTucComponent implements OnInit, OnDestroy{
  constructor(private noti: notifications, private title: Title){

  }
  ngOnInit(){
    for(let i=0; i < this.noti.notis.length; i++){
      this.notiCopy[i] = this.noti.notis[i];
    }
    this.title.changeTitle('Tin tức & Sự kiện');
  }

  ngOnDestroy(){
    this.title.resetTitle();
  }

  notiCopy: {id:string, actTag: string, testsTag: string, title: string, date: string, img: string, short: string}[] = [];
}
