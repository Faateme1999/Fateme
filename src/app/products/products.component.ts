import { Component, EventEmitter, Input, input, OnInit, Output } from '@angular/core';
import { ProductsService } from './products.service';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { DataService } from '../data-service';
import { DetailsComponent } from '../details/details.component';
import { CartService } from '../cart/cart.service';
import { CartItem } from '../shared/cartItem';
import { Product } from '../shared/product';
import { Cart } from '../shared/cart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
    
  products;
  id: any;
  product:Product=new Product;

    constructor(private ProductService:ProductsService,private rout:ActivatedRoute, private router:Router,public dataService: DataService, private activeRoute:ActivatedRoute,public cartservice:CartService){
    this.products= this.ProductService.getProductData(this.id);
    }


    ngOnInit(): void {
    }

    navigate(){
      this.router.navigate(['/history']);
    }
    
    productnavigate(){
      this.router.navigate(['/product']);
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


  




  

