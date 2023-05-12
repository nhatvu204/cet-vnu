import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '../Services/title.service';
import { HeaderChange } from '../Services/header.service';

@Component({
  selector: 'app-hoat-dong',
  templateUrl: './hoat-dong.component.html',
  styleUrls: ['./hoat-dong.component.css']
})
export class HoatDongComponent implements OnInit, OnDestroy {
  constructor(private title: Title, private headerChange: HeaderChange){

  }

  ngOnInit(){
    this.title.changeTitle('Hoạt động dịch vụ');
    this.headerChange.changeHeader('HOẠT ĐỘNG DỊCH VỤ');

  }

  ngOnDestroy(){
    this.title.resetTitle();
    // this.headerChange.resetHeader();
  }
}
