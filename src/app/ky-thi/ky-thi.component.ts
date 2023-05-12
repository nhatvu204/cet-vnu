import { Component, OnInit, OnDestroy } from '@angular/core';
import { notifications } from '../Services/notifications.service';
import { Title } from '../Services/title.service';


@Component({
  selector: 'app-ky-thi',
  templateUrl: './ky-thi.component.html',
  styleUrls: ['./ky-thi.component.css']
})
export class KyThiComponent implements OnInit{
  constructor(private noti: notifications, private title: Title){

  }

  ngOnInit() {
    for(let i=0; i < this.noti.notis.length; i++){
      if(this.noti.notis[i].testsTag == 'HSA'){
        this.notiCopy.push(this.noti.notis[i]);
      }
    }

    this.title.changeTitle('Khảo thí');
  }

  ngOnDestroy(){
    this.title.resetTitle();
  }

  notiCopy: {id:string, actTag:string, testsTag: string, title: string, date: string, img: string, short: string}[] = [];
}
