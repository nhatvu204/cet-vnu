import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Title } from '../Services/title.service';
import { HeaderChange } from '../Services/header.service';
import { notifications } from '../Services/notifications.service';

@Component({
  selector: 'app-hoat-dong',
  templateUrl: './hoat-dong.component.html',
  styleUrls: ['./hoat-dong.component.css']
})
export class HoatDongComponent implements OnInit, OnDestroy, AfterViewInit {
  constructor(private noti: notifications, private title: Title, private headerChange: HeaderChange){
    this.headerChange.changeHeader('HOẠT ĐỘNG DỊCH VỤ');
  }

  ngOnInit() {
    for(let i=0; i < this.noti.notis.length; i++){
      if(this.noti.notis[i].actTag == 'tap-huan'){
        this.notiCopy.push(this.noti.notis[i]);
      }
    }


    // this.headerChange.changeHeader('KHẢO THÍ');
  }

  ngAfterViewInit(){
    this.title.changeTitle('Hoạt động dịch vụ');
  }

  ngOnDestroy(){
    this.title.resetTitle();
    // this.headerChange.resetHeader();
  }

  notiCopy: {id:string, actTag:string, testsTag: string, title: string, date: string, img: string, short: string}[] = [];
}
