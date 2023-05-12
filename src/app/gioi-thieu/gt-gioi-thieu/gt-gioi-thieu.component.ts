import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from 'src/app/Services/title.service';

@Component({
  selector: 'app-gt-gioi-thieu',
  templateUrl: './gt-gioi-thieu.component.html',
  styleUrls: ['./gt-gioi-thieu.component.css']
})
export class GtGioiThieuComponent implements OnInit, OnDestroy{
  constructor(private title: Title){

  }
  ngOnInit(){
    this.title.changeTitle('Giới thiệu');
  }

  ngOnDestroy(){
    this.title.resetTitle();
  }
}
