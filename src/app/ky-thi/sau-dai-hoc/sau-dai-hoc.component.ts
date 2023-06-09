import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { HeaderChange } from 'src/app/Services/header.service';
import { notifications } from 'src/app/Services/notifications.service';
import { Title } from 'src/app/Services/title.service';

@Component({
  selector: 'app-sau-dai-hoc',
  templateUrl: './sau-dai-hoc.component.html',
  styleUrls: ['./sau-dai-hoc.component.css']
})
export class SauDaiHocComponent implements OnInit, OnDestroy{
  constructor(private noti: notifications, private title: Title, private headerChange: HeaderChange){
    this.headerChange.changeHeader('KHẢO THÍ');

  }

  ngOnInit() {
    for(let i=0; i < this.noti.notis.length; i++){
      this.notiCopy[i] = this.noti.notis[i];
    }
    this.title.changeTitle('Tuyển sinh Sau đại học');
  }

  ngOnDestroy(){
    this.title.resetTitle();
  }

  notiCopy: {id:string, actTag: string,testsTag: string, title: string, date: string, img: string, short: string}[] = [];
}
