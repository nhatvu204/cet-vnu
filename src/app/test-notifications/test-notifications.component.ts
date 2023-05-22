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
      console.log(this.notiList);
    })
  }
  notis = [
    {id: 1, title: 'Hoàn thành đợt thi HSA thứ tư năm 2023'},
    {id: 2, title: 'Tin ảnh các đợt thi HSA tháng 3-4/2023 '},
    {id: 3, title: 'Đợt thi Đánh giá năng lực thứ ba của năm 2023 - HSA 303 '},
    {id: 4, title: 'Hội nghị Sơ kết công tác giữa nhiệm kỳ Đại hội nhiệm kỳ 2020-2025 và Lễ kết nạp Đảng viên mới năm 2023 '},
    {id: 5, title: 'Trung tâm Khảo thí ĐHQGHN là đơn vị đầu tiên tổ chức Đại hội Đại biểu Công đoàn cấp cơ sở '},
    {id: 6, title: 'Thông báo về việc tuyển dụng lao động hợp đồng đợt 1 năm 2023 '},
  ]
}
