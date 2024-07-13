import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

private PhoneNumberSource=new BehaviorSubject<string>('');

currentPhoneNumber= this.PhoneNumberSource.asObservable();

constructor(){}

setPhoneNumber(number:string){
this.PhoneNumberSource.next(number);
}



  }