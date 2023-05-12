import { Component, OnInit } from '@angular/core';
import { notifications } from '../Services/notifications.service';

@Component({
  selector: 'app-ky-thi',
  templateUrl: './ky-thi.component.html',
  styleUrls: ['./ky-thi.component.css']
})
export class KyThiComponent implements OnInit{
  constructor(private noti: notifications){

  }

  ngOnInit() {
    for(let i=0; i < this.noti.notis.length; i++){
      if(this.noti.notis[i].testsTag == 'HSA'){
        this.notiCopy.push(this.noti.notis[i]);
      }
    }
    console.log(this.notiCopy);
  }

  notiCopy: {id:string, actTag:string, testsTag: string, title: string, date: string, img: string, short: string}[] = [];
}
