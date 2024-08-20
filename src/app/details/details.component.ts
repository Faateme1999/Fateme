import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailsService } from './details.service';
import { DataService } from '../data-service';
import { ProductsService } from '../products/products.service';
import { from, switchMap } from 'rxjs'
import { CartService } from '../cart/cart.service';
import { Product } from '../shared/product';
import { CartItem } from '../shared/cartItem';
import { Cart } from '../shared/cart';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

 constructor(private detailservice:DetailsService, private activeRoute:ActivatedRoute, private router:Router ,private rout:ActivatedRoute,public dataService: DataService,private ProductService:ProductsService, public cartservice:CartService){
 }



product:Product=new Product;
  

 ngOnInit(): void {
let id= +this.activeRoute.snapshot.params['id'];
console.log(id);
this.product= this.ProductService.getproduct(id);
}



ProductCart(product:Product){
  this.cartservice.addtoCart({productId:product.id,quantity:1,product:this.product,totalCost:product.cost})
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



