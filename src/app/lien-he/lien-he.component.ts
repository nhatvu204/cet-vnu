import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '../Services/title.service';

@Component({
  selector: 'app-lien-he',
  templateUrl: './lien-he.component.html',
  styleUrls: ['./lien-he.component.css']
})
export class LienHeComponent implements OnInit, OnDestroy{
  constructor(private titleChange: Title){

  }

  ngOnInit(){
    this.titleChange.changeTitle('Liên hệ');
  }

  ngOnDestroy(){
    this.titleChange.resetTitle();
  }
}
