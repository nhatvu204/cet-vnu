import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'
import { Title } from '../Services/title.service';

@Component({
  selector: 'app-gioi-thieu',
  templateUrl: './gioi-thieu.component.html',
  styleUrls: ['./gioi-thieu.component.css']
})
export class GioiThieuComponent implements OnInit, OnDestroy{
  constructor(private title: Title){

  }
  ngOnInit(){
    this.title.changeTitle('Giới thiệu');
  }

  ngOnDestroy(){
    this.title.resetTitle();
  }
}
