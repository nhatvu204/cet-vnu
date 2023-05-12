import { Component, OnInit, OnDestroy } from '@angular/core';
import { notifications } from '../Services/notifications.service';
import { Title } from '../Services/title.service';
import { HeaderChange } from '../Services/header.service';


@Component({
  selector: 'app-ky-thi',
  templateUrl: './ky-thi.component.html',
  styleUrls: ['./ky-thi.component.css']
})
export class KyThiComponent implements OnInit{
  constructor(private noti: notifications, private title: Title, private headerChange: HeaderChange){
    this.headerChange.changeHeader('KHẢO THÍ');
  }

  ngOnInit() {
    for(let i=0; i < this.noti.notis.length; i++){
      if(this.noti.notis[i].testsTag == 'HSA'){
        this.notiCopy.push(this.noti.notis[i]);
      }
    }

    this.title.changeTitle('Khảo thí');
    // this.headerChange.changeHeader('KHẢO THÍ');
  }

  ngOnDestroy(){
    this.title.resetTitle();
    // this.headerChange.resetHeader();
  }

  notiCopy: {id:string, actTag:string, testsTag: string, title: string, date: string, img: string, short: string}[] = [];
}
