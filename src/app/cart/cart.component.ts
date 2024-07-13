import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  addItems: any[] =[];

  addCart(item:any){
    alert("hi");
    console.log(item);
    this.addItems.push(item);
  } 
  



}
