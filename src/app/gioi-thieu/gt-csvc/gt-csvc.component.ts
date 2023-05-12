import { Component, OnInit } from '@angular/core';
import { Title } from 'src/app/Services/title.service';
@Component({
  selector: 'app-gt-csvc',
  templateUrl: './gt-csvc.component.html',
  styleUrls: ['./gt-csvc.component.css']
})
export class GtCsvcComponent implements OnInit{
  constructor (private title: Title){

  }
  ngOnInit(){
    this.title.changeTitle('Cơ sở vật chất');
  }
}
