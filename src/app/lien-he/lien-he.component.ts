import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { Title } from '../Services/title.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-lien-he',
  templateUrl: './lien-he.component.html',
  styleUrls: ['./lien-he.component.css']
})
export class LienHeComponent implements OnInit, OnDestroy, AfterViewInit{
  constructor(private titleChange: Title){

  }

  onSubmit(){
    console.log(this.reactiveForm);
  }

  ngOnInit(){
    this.titleChange.changeTitle('Liên hệ');

    this.reactiveForm = new FormGroup({
      fullName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      phoneNum: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      content: new FormControl(null)
    })
  }

  ngAfterViewInit(){

  }

  ngOnDestroy(){
    this.titleChange.resetTitle();
  }

  reactiveForm: FormGroup;
}
