import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from '../data-service';
import { ProductsService } from '../products/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from './cart.service';
import { CartItem } from '../shared/cartItem';
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'rxjs';
import { Product } from '../shared/product';
import { deepCopy } from 'deep-copy-ts';
import { Cart } from '../shared/cart';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {


 
  completedCarts:Cart[]=[];
  cart:Cart=new Cart();
  product:Product=new Product;
  
  

  constructor(public dataService:DataService, private activeRoute:ActivatedRoute, private ProductService:ProductsService,private rout:ActivatedRoute, private router:Router, public cartservice:CartService,private toastr: ToastrService){
  
  }



ngOnInit(): void {

  this.cart.cartItem=this.cartservice.cart;
}



 quantity:number=0;
 productnumber:string="";


 increaseProduct(productId:number){
  let item= this.cart.cartItem.find(c =>c.productId==productId);
  console.log(item);
  if(item){
 item.quantity+=1;
  }
  else{
    this.cartservice.addtoCart({productId:this.product.id,quantity:1,product:this.product,totalCost:this.product.cost});
  }
}



decreaseProduct(productId: number) {
  let item = this.cart.cartItem.find(c => c.productId == productId);
  if (item) {
    if (item.quantity > 0) {
      item.quantity--;
      if (item.quantity === 0) {
        this.cartservice.removeFromCart(productId);
        this.cart.cartItem= this.cart.cartItem.filter(c => c.productId !== productId); 
      }
    }
  }
}



remove(productId:number) {
 this.cartservice.removeFromCart(productId);
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





checkout(){
  if (this.cart.cartItem.length > 0){
    // this.cartservice.completeCart(this.completedCarts)
    // this.cartservice.completeCart({code:1,clubrate:5,date:"9",discount:3,carts:this.completedCarts});
    this.cartservice.completeCart(this.cart);
    this.cartservice.clearCart();
    this.router.navigate(['/checkout']);
  } else {
    alert("سبد خرید شما خالی است \u2757");
  }
}



}











