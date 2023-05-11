import { Component, OnInit } from '@angular/core';
import { notifications } from 'src/app/Services/notifications.service';

@Component({
  selector: 'app-sau-dai-hoc',
  templateUrl: './sau-dai-hoc.component.html',
  styleUrls: ['./sau-dai-hoc.component.css']
})
export class SauDaiHocComponent implements OnInit {
  constructor(private noti: notifications){

  }

  ngOnInit() {
    for(let i=0; i < this.noti.notis.length; i++){
      this.notiCopy[i] = this.noti.notis[i];
    }
  }

  notiCopy: {id:string,tag: string, title: string, date: string, img: string, short: string}[] = [];
}
