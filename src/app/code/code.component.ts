import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { codeValidator } from './code.validator';
import { CodeServiceService } from './code-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, interval, map, take, takeWhile } from 'rxjs';
import { DataserviceComponent } from '../dataservice/dataservice.component';
import { DataService } from '../data-service';

@Component({
  selector: 'code',
  templateUrl: './code.component.html',
  styleUrl: './code.component.css'
})
export class CodeComponent  implements OnInit {

  constructor(private codeService:CodeServiceService,private rout:ActivatedRoute, private router:Router,private dataService:DataService){
    this.minutes = 3;
    this.seconds = 0;
    this.expired=false;
    this.try=true;
  }

  form=new FormGroup({
    code: new FormControl('',[
      Validators.pattern(('^.{4}$')),
    ],[
      codeValidator.checkCode
    ]),
  });


  get code(){
    return this.form.get('code');
  }

  navigate(){
  this.router.navigate(['/login']);
  }


  minutes: number;
  seconds: number;
  expired:boolean;
  try:boolean;


  ngOnInit() {
    const timer$ = interval(1000).pipe(
      map((value) => 180 - value),
      takeWhile(val => val >= 0),// ادامه دادن تایمر تا زمانی که زمان باقی‌مانده مثبت باشد
    );

    timer$.subscribe((value) => {
      this.minutes = Math.floor(value / 60);
      this.seconds = value % 60;
      if(value === 0){
        this.expired=true;
        this.try=false;
      }
    });
    

    this.dataService.currentPhoneNumber.subscribe(number=> this.phoneNumber=number); 
  }


  again(){
    this.try=true;
    this.expired=false;
    const timer$ = interval(1000).pipe(
      map((value) => 180 - value),
      takeWhile(val => val >= 0),
    );

    timer$.subscribe((value) => {
      this.minutes = Math.floor(value / 60);
      this.seconds = value % 60;
      if(value === 0){
        this.try=true;
        this.expired=true;
      }
    });
  
    return false
   
  }



  historynavigate(){
    if(this.form.valid){
  this.router.navigate(['/history']);
    }

    if(this.form.pending){
      alert("لطفا ۵ ثانیه صبر کنید");  
      }

  }


  phoneNumber:string="";











}
