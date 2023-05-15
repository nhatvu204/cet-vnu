import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { Title } from '../Services/title.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lien-he',
  templateUrl: './lien-he.component.html',
  styleUrls: ['./lien-he.component.css']
})
export class LienHeComponent implements OnInit, OnDestroy, AfterViewInit{
  constructor(private titleChange: Title){

  }

  onSubmit(form: NgForm){
    console.log(form);
  }

  ngOnInit(){
    this.titleChange.changeTitle('Liên hệ');


  }

  ngAfterViewInit(){

  }

  ngOnDestroy(){
    this.titleChange.resetTitle();
  }

}
