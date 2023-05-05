import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o/lib/models/owl-options.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
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

  dynamicSlides = [
    {
      id: '1',
      date:'15/02/2023',
      time:'17:14',
      src:'https://cet.vnu.edu.vn/gw/imageresize/unsafe/600x400/smart/cet.vnu.edu.vn/gw/file/v5/FileObject/public/38ad5879-a1d3-47e2-a816-78a93c5dc9b5/download',
      alt:'Side 1',
      title:'Hòa Lạc thêm xanh'
    },
    {
      id: '2',
      date:'17/01/2023',
      time:'17:27',
      src:'https://cet.vnu.edu.vn/gw/imageresize/unsafe/600x400/smart/cet.vnu.edu.vn/gw/file/v5/FileObject/public/f9fa5903-d63c-4808-9306-3be4c93b56dd/download',
      alt:'Side 2',
      title:'Trung tâm Khảo thí Đại học Quốc gia Hà Nội ký thỏa thuận hợp tác  với Trường Đại học Việt Nhật Đại học Quốc gia Hà Nội'
    },
    {
      id: '3',
      date:'29/122022',
      time:'15:58',
      src:'https://cet.vnu.edu.vn/gw/imageresize/unsafe/600x400/smart/cet.vnu.edu.vn/gw/file/v5/FileObject/public/b1228050-ed60-4001-ae32-f2fa104e549e/download',
      alt:'Side 3',
      title:'Lễ kết nạp Đảng viên mới năm 2022 của Chi bộ Trung tâm Khảo thí ĐHQGHN'
    },
    {
      id: '4',
      date:'31/03/2023',
      time:'11:01',
      src:'https://cet.vnu.edu.vn/gw/imageresize/unsafe/600x400/smart/cet.vnu.edu.vn/gw/file/v5/FileObject/public/5f80c7c3-0936-4a64-9c78-f92a25d30644/download',
      alt:'Side 4',
      title:'Trung tâm Khảo thí ĐHQGHN là đơn vị đầu tiên tổ chức Đại hội Đại biểu Công đoàn cấp cơ sở'
    },
    {
      id: '5',
      date:'03/03/2023',
      time:'17:16',
      src:'https://cet.vnu.edu.vn/gw/imageresize/unsafe/600x400/smart/cet.vnu.edu.vn/gw/file/v5/FileObject/public/162f1e81-92b5-40ad-8862-3236c7cab641/download',
      alt:'Side 5',
      title:'Trung tâm Khảo thí ĐHQGHN là đơn vị đầu tiên tổ chức Đại hội Đại biểu Công đoàn cấp cơ sở'
    }
  ]
}
