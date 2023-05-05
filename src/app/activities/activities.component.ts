import { Component } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent {
  activities = [
    {id:'1', title: 'VTV1 - Vấn đề hôm nay 06.02.2023', date: '06/02/2023'},
    {id:'2', title: 'VTV1 Vấn đề hôm nay - 03.02.2023', date: '03/02/2023'},
    {id:'3', title: 'Thông tin mới nhất, quan trọng nhất về thi HSA, thí sinh cần lưu ý [Báo Đại biểu Nhân dân]', date: '03/02/2023'},
    {id:'4', title: 'Hướng dẫn nộp lệ phí thi HSA', date: '03/02/2023'},
    {id:'5', title: 'Video hướng dẫn đăng tài khoản thi HSA', date: '03/02/2023'},
    {id:'6', title: 'Nhiều trường đại học sử dụng kết quả bài thi HSA để tuyển sinh', date: '13/07/2022'},
    {id:'7', title: 'Kỳ thi Đánh giá năng lực (HSA) năm 2022', date: '13/07/2022'},
    {id:'8', title: 'Kỳ thi HSA tăng cơ hội cho thí sinh trúng tuyển đại học', date: '17/12/2021'},
  ]
}
