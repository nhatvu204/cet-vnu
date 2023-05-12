import { Component, OnInit } from '@angular/core';
import { notifications } from 'src/app/Services/notifications.service';

@Component({
  selector: 'app-dai-hoc',
  templateUrl: './dai-hoc.component.html',
  styleUrls: ['./dai-hoc.component.css']
})
export class DaiHocComponent implements OnInit {
  constructor(private noti: notifications){

  }

  ngOnInit() {
    for(let i=0; i < this.noti.notis.length; i++){
      this.notiCopy[i] = this.noti.notis[i];
    }
  }

  notiCopy: {id:string, actTag:string, testsTag: string, title: string, date: string, img: string, short: string}[] = [];

}
