import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { httpBody } from '../Services/httpBody.service';

@Component({
  selector: 'app-test-notifications',
  templateUrl: './test-notifications.component.html',
  styleUrls: ['./test-notifications.component.css']
})
export class TestNotificationsComponent implements OnInit{
  constructor(private http: HttpClient, private httpBody: httpBody){

  }
  notiList = [];
  url = 'https://u2212-dev.dttt.vn/public/cmscore/v5/Article/GetData/GetByNewsCategoryCode/TIN_TUC_THONG_BAO';


  ngOnInit(){
    this.http.post<any>(this.url, this.httpBody.body)
    .subscribe((res)=>{
      this.notiList = res.data;
    })
  }
}
