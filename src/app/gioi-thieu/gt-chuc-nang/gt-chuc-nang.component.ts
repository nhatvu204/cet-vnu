import { Component, OnInit } from '@angular/core';
import { Title } from 'src/app/Services/title.service';

@Component({
  selector: 'app-gt-chuc-nang',
  templateUrl: './gt-chuc-nang.component.html',
  styleUrls: ['./gt-chuc-nang.component.css']
})
export class GtChucNangComponent implements OnInit{
  constructor (private title: Title){

  }

  ngOnInit(){
    this.title.changeTitle('Chức năng & nhiệm vụ');
  }
}
