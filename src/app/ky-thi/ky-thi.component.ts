import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Title } from '../Services/title.service';
import { HeaderChange } from '../Services/header.service';
import { HttpClient } from '@angular/common/http';
import { httpBody } from '../Services/httpBody.service';


@Component({
  selector: 'app-ky-thi',
  templateUrl: './ky-thi.component.html',
  styleUrls: ['./ky-thi.component.css']
})
export class KyThiComponent implements OnInit,AfterViewInit{
  constructor(private title: Title, private headerChange: HeaderChange, private http: HttpClient, private httpBody: httpBody){
    this.headerChange.changeHeader('KHẢO THÍ');
  }

  ngOnInit() {
    this.http.post<any>(this.url, this.httpBody.body)
    .subscribe((res)=>{
      this.notiList = res.data;
      let imgPreUrl:string[] = [];

      for(let i =0; i < this.notiList.length; i++){
        imgPreUrl.push(this.notiList[i]['thumbnail']);
      }
      for(let i = 0; i < imgPreUrl.length; i++){
        this.imgUrl.push(`https:///u2212-dev.dttt.vn/gwdevv5/file/v5/FileObject/public/${imgPreUrl[i]}/download`);
      }

      console.log(this.notiList);
    })
  }

  ngAfterViewInit(){
    this.title.changeTitle('Khảo thí');
  }

  ngOnDestroy(){
    this.title.resetTitle();
    // this.headerChange.resetHeader();
  }

  url = 'https://u2212-dev.dttt.vn/public/cmscore/v5/Article/GetData/GetByNewsCategoryCode/TUYENSINH';
  notiList =[];
  imgUrl:string[] = [];
}
