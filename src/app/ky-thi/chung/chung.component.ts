import { Component, OnInit } from '@angular/core';
import { notifications } from 'src/app/Services/notifications.service';

@Component({
  selector: 'app-chung',
  templateUrl: './chung.component.html',
  styleUrls: ['./chung.component.css']
})
export class ChungComponent implements OnInit{
  constructor(private noti: notifications){

  }

  ngOnInit() {
    for(let i=0; i < this.noti.notis.length; i++){
      this.notiCopy[i] = this.noti.notis[i];
    }
  }

  notiCopy: {id:string,tag: string, title: string, date: string, img: string, short: string}[] = [];
}
