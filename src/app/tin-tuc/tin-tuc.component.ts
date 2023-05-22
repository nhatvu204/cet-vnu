import { Component, OnInit, OnDestroy, OnChanges, AfterContentInit } from '@angular/core';
import { notifications } from '../Services/notifications.service';
import { Title } from '../Services/title.service';
import { HeaderChange } from '../Services/header.service';
import { HttpClient } from '@angular/common/http';
import { httpBody } from '../Services/httpBody.service';

@Component({
  selector: 'app-tin-tuc',
  templateUrl: './tin-tuc.component.html',
  styleUrls: ['./tin-tuc.component.css'],
  providers: [notifications]
})
export class TinTucComponent implements OnInit, OnDestroy{
  constructor(private noti: notifications, private title: Title, private headerChange: HeaderChange, private http: HttpClient, private httpBody: httpBody){

  }
  ngOnInit(){
    for(let i=0; i < this.noti.notis.length; i++){
      this.notiCopy[i] = this.noti.notis[i];
    }
    this.http.post<any>(this.url, this.httpBody.body)
    .subscribe((res)=>{
      this.notiList = res.data;
      let imgPreUrl:string[] = [];

      for(let i =0; i < this.notiList.length; i++){
        imgPreUrl.push(this.notiList[i]['thumbnail']);
      }
      console.log(this.notiList);

      for(let i = 0; i < imgPreUrl.length; i++){
        this.imgUrl.push(`https:///u2212-dev.dttt.vn/gwdevv5/file/v5/FileObject/public/${imgPreUrl[i]}/download`);
      }
      console.log(this.imgUrl);
    })
    this.title.changeTitle('Tin tức & Sự kiện');
    this.headerChange.changeHeader('TIN TỨC - SỰ KIỆN');
  }

  ngOnDestroy(){
    this.title.resetTitle();
  }

  notiCopy: {id:string, actTag: string, testsTag: string, title: string, date: string, img: string, short: string}[] = [];
  notiList = [];
  url = 'https://u2212-dev.dttt.vn/public/cmscore/v5/Article/GetData/GetByNewsCategoryCode/TIN_TUC_SU_KIEN';
  imgUrl:string[] = [];
}
