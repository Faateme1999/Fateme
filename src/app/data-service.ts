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



selectedProducts2: any;
  
 
private selectedProducts:string[]=[];
selectedProducts$=new BehaviorSubject<any[]>([]);



setSelectedProduct(product:any){
    this.selectedProducts.push(product);
    this.selectedProducts$.next(this.selectedProducts);


}


getSelectedProductsCount(): number {
  return this.selectedProducts.length;
}


  }