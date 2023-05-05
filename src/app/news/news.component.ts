import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  news = [
    {id: '1', title: 'Tin ảnh các đợt thi HSA tháng 3-4/2023', date:'10/04/2023', time:'08:55', img:'https://cet.vnu.edu.vn/gw/imageresize/unsafe/600x400/smart/cet.vnu.edu.vn/gw/file/v5/FileObject/public/af956920-bdad-4675-85df-8bfe64c901de/download'},
    {id: '2', title: 'Đợt thi Đánh giá năng lực thứ ba của năm 2023 - HSA 303', date:'09/04/2023', time:'18:04', img:'https://cet.vnu.edu.vn/gw/imageresize/unsafe/600x400/smart/cet.vnu.edu.vn/gw/file/v5/FileObject/public/71651c04-8e29-4503-85b3-dd480b67ed22/download'},
    {id: '3', title: 'Đề thi tham khảo Đánh giá năng lực của ĐHQGHN', date:'03/01/2023', time:'14:58', img:'https://cet.vnu.edu.vn/gw/imageresize/unsafe/600x400/smart/cet.vnu.edu.vn/gw/file/v5/FileObject/public/375f65a3-1bd9-480e-ba8b-05a3363963f9/download'},
    {id: '4', title: ' Dạng thức và Đề cương bài thi Đánh giá năng lực (HSA) ', date:'03/01/2023', time:'14:48', img:'https://cet.vnu.edu.vn/assets/images/TTKT/no-image.png'},
  ]

  highlightedNews = {
    title: ' Hoàn thành đợt thi HSA thứ tư năm 2023 ',
    img: 'https://cet.vnu.edu.vn/assets/images/TTKT/no-image.png',
  }
}
