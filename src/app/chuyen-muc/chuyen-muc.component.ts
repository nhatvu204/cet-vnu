import { Component, OnInit } from '@angular/core';
import { httpBody } from '../Services/httpBody.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chuyen-muc',
  templateUrl: './chuyen-muc.component.html',
  styleUrls: ['./chuyen-muc.component.css'],
})
export class ChuyenMucComponent implements OnInit {
  notiList = [];
  url = 'https://u2212-dev.dttt.vn/public/cmscore/v5/Article/GetData/GetByNewsCategoryCode/TIN_TUC_THONG_BAO'
  constructor(private httpBody: httpBody, private http: HttpClient){

  }
  ngOnInit() {
    this.http.post<any>(this.url,this.httpBody.body)
    .subscribe((res)=>{
      this.notiList = res.data;
      console.log(this.notiList);
    })
  }
}
