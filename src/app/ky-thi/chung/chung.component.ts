import { Component, OnInit, OnDestroy } from '@angular/core';
import { notifications } from 'src/app/Services/notifications.service';
import { Title } from 'src/app/Services/title.service';

@Component({
  selector: 'app-chung',
  templateUrl: './chung.component.html',
  styleUrls: ['./chung.component.css']
})
export class ChungComponent implements OnInit, OnDestroy{
  constructor(private noti: notifications, private title: Title){

  }

  ngOnInit() {
    for(let i=0; i < this.noti.notis.length; i++){
      this.notiCopy[i] = this.noti.notis[i];
    }
    this.title.changeTitle('Học phần chung');
  }

  ngOnDestroy(){
    this.title.resetTitle();
  }

  notiCopy: {id:string,actTag: string, testsTag: string, title: string, date: string, img: string, short: string}[] = [];
}
