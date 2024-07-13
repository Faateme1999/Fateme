import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { confirmPhoneValidator } from './phone.validator';
import { LoginService } from './login-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataserviceComponent } from '../dataservice/dataservice.component';
import { DataService } from '../data-service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {  

  constructor(private loginService:LoginService,private rout:ActivatedRoute, private router:Router,private dataService:DataService){}

    form= new FormGroup({
    phone: new FormControl('',[
      Validators.required,
      Validators.pattern(/^(09(0[1-9]|1[0-9]|2[1-9]|3[1-9])-?[0-9]{3}-?[0-9]{4}|[a-z0-9._%+-]+@[a-z0-9.-]+\.(com|ir))$/),
    ],
    [
      // confirmPhoneValidator.checkPhone,
    ]),
  });

  submit(){
    console.log(this.form);
    
    this.dataService.setPhoneNumber(this.phoneNumber);

    if(this.form.valid){
    this.router.navigate(['/code'])
    }
  if (this.form.invalid) {
    alert("حساب کاربری با مشخصات وارد شده وجود ندارد")
  } 
  else {
  (this.form.pending)
    alert("لطفا ۵ ثانیه صبر کنید")
  }
  }


  get phone(){
    return this.form.get('phone');
  }

  productNavigate(){
    this.router.navigate(['/product']);
  }






  phoneNumber:string="";
  



 




}






