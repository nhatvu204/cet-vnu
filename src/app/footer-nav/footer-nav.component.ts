import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.css']
})
export class FooterNavComponent {
  links = [
    {id:'1', title:'VNU-CET'},
    {id:'2', title:'ĐỐI TÁC'},
    {id:'3', title:'ĐÀO TẠO'},
    {id:'4', title:'KHOA HỌC'},
    {id:'5', title:'TUYỂN DỤNG'},
    {id:'6', title:'PHẢN HỒI'},
  ]
}
