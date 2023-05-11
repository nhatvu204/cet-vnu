import { Component, OnInit } from '@angular/core';
import { notifications } from '../Services/notifications.service';

@Component({
  selector: 'app-chuyen-muc',
  templateUrl: './chuyen-muc.component.html',
  styleUrls: ['./chuyen-muc.component.css'],
  providers: [notifications]
})
export class ChuyenMucComponent implements OnInit {
  notiCopy: {id:string,tag: string, title: string, date: string, img: string, short: string}[] = [];
  constructor(private noti: notifications){

  }
  ngOnInit() {
    for(let i=0; i < 6; i++){
      this.notiCopy[i] = this.noti.notis[i];
    }
  }
}
