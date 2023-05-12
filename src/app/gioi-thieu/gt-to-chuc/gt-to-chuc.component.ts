import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from 'src/app/Services/title.service';

@Component({
  selector: 'app-gt-to-chuc',
  templateUrl: './gt-to-chuc.component.html',
  styleUrls: ['./gt-to-chuc.component.css']
})
export class GtToChucComponent implements OnInit, OnDestroy{
  constructor(private title: Title){

  }

  ngOnInit(){
    this.title.changeTitle('Cơ cấu tổ chức');
  }

  ngOnDestroy(){
    this.title.resetTitle();
  }
}
