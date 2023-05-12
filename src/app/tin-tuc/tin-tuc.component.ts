import { Component, OnInit, OnDestroy, OnChanges, AfterContentInit } from '@angular/core';
import { notifications } from '../Services/notifications.service';
import { Title } from '../Services/title.service';
import { HeaderChange } from '../Services/header.service';

@Component({
  selector: 'app-tin-tuc',
  templateUrl: './tin-tuc.component.html',
  styleUrls: ['./tin-tuc.component.css'],
  providers: [notifications]
})
export class TinTucComponent implements OnInit, OnDestroy{
  constructor(private noti: notifications, private title: Title, private headerChange: HeaderChange){

  }
  ngOnInit(){
    for(let i=0; i < this.noti.notis.length; i++){
      this.notiCopy[i] = this.noti.notis[i];
    }
    this.title.changeTitle('Tin tức & Sự kiện');
    this.headerChange.changeHeader('TIN TỨC - SỰ KIỆN');
  }

  ngOnDestroy(){
    this.title.resetTitle();
  }

  notiCopy: {id:string, actTag: string, testsTag: string, title: string, date: string, img: string, short: string}[] = [];
}
