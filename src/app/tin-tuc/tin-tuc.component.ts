import { Component, OnInit } from '@angular/core';
import { notifications } from '../Services/notifications.service';

@Component({
  selector: 'app-tin-tuc',
  templateUrl: './tin-tuc.component.html',
  styleUrls: ['./tin-tuc.component.css'],
  providers: [notifications]
})
export class TinTucComponent implements OnInit{
  constructor(private noti: notifications){

  }
  ngOnInit(){
    for(let i=0; i < this.noti.notis.length; i++){
      this.notiCopy[i] = this.noti.notis[i];
    }
  }
  notiCopy: {id:string, title: string, date: string, img: string, short: string}[] = [];
}
