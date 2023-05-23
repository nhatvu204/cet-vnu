import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o/lib/models/owl-options.model';
import { httpBody } from '../Services/httpBody.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit{
  constructor(private http: HttpClient, private httpBody: httpBody){
    this.httpBody.body.sorts.push({"field": "releaseDate", "dir": 1});
  }


  ngOnInit(){
    this.http.post<any>(this.url,this.httpBody.body)
    .subscribe((res)=>{
      let preList:[] = res.data;
      for (let i = 0; i < 7; i++){
        this.notiList.push(preList[i]);
      }
      console.log(this.notiList)

      let imgPreUrl:string[] = [];
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
    })
  }

  notiList = [];
  url = 'https://u2212-dev.dttt.vn/public/cmscore/v5/Article/GetData/GetByNewsCategoryCode/TUYENSINH';
  imgUrl:string[] = [];
  defaultImg = 'https://cet.vnu.edu.vn/assets/images/TTKT/no-image.png';

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
    },
    nav: true
  }


}
