import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { CartItem } from '../shared/cartItem';
import { Product } from '../shared/product';
import { DataService } from '../data-service';
import { ProductsService } from '../products/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckoutService } from './checkout.service';
import { deepCopy } from "deep-copy-ts";
import { Cart } from '../shared/cart';




@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})


export class CheckoutComponent implements OnInit{

completedCarts:Cart[]=[];

constructor(public cartservice:CartService,public dataService:DataService, private ProductService:ProductsService,private rout:ActivatedRoute, private router:Router,public checkoutservice:CheckoutService ){

}


ngOnInit(): void {
  this.completedCarts=this.cartservice.completedCarts;
  console.log(this.completedCarts);
}

loginNavigate(){
  this.router.navigate(['/login']);
}

ShopNavigate(){
  this.router.navigate(['/cart']);
}

option="";
navbar(value:string){
  if(value==='checkout'){
    this.router.navigate(['/checkout']);
  }
else if(value==='product'){
  this.router.navigate(['/product']);
}
else if(value==='login'){
  this.router.navigate(['/login']);
}
}


  user="";
  navbarUser(value:string){
    if(value==='checkout'){
      this.router.navigate(['/checkout']);
    }
  else if(value==='product'){
    this.router.navigate(['/product']);
  }
  else if(value==='login'){
    this.router.navigate(['/login']);
  }
  else if(value==='cart'){
    this.router.navigate(['/cart']);
  }
  }


}  
