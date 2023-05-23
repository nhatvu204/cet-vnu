import { Component, OnInit } from '@angular/core';
import { httpBody } from '../Services/httpBody.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit{
  constructor(private http: HttpClient, private httpBody: httpBody){
    this.httpBody.body.sorts.push({"field": "releaseDate", "dir": 1})
  }

  ngOnInit(){
    this.http.post<any>(this.url, this.httpBody.body)
    .subscribe((res)=>{
      let preList:[] = res.data;
      let imgPreUrl:string[] = [];
      for (let i = 0; i < 5; i++){
        this.notiList.push(preList[i]);
        this.notiCopy.push(preList[i]);
      }
      for(let i =0; i < this.notiList.length; i++){
        imgPreUrl.push(this.notiList[i]['thumbnail']);
      }
      for(let i = 0; i < imgPreUrl.length; i++){
        if (imgPreUrl[i] != null){
          this.imgUrl.push(`https:///u2212-dev.dttt.vn/gwdevv5/file/v5/FileObject/public/${imgPreUrl[i]}/download`);
        }
        else{
          this.imgUrl.push(this.defaultImg);
        }
      }
      this.notiCopy.splice(0,1);
    })
  }

  url = 'https://u2212-dev.dttt.vn/public/cmscore/v5/Article/GetData/GetByNewsCategoryCode/TUYENSINH';
  imgUrl:string[] = [];
  notiList = [];
  defaultImg = 'https://cet.vnu.edu.vn/assets/images/TTKT/no-image.png';
  notiCopy = [];
}
