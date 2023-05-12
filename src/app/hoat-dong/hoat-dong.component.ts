import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '../Services/title.service';

@Component({
  selector: 'app-hoat-dong',
  templateUrl: './hoat-dong.component.html',
  styleUrls: ['./hoat-dong.component.css']
})
export class HoatDongComponent implements OnInit, OnDestroy {
  constructor(private title: Title){

  }

  ngOnInit(){
    this.title.changeTitle('Hoạt động dịch vụ');
  }

  ngOnDestroy(){
    this.title.resetTitle();
  }
}
