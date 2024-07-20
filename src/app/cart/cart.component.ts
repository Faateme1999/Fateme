import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from '../data-service';
import { ProductsService } from '../products/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataCartService } from '../datacart-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  selectedProducts:any;
  products: { id: number; name: string; number: string; cost: string; rate: string; photo: string; quantity:number }[];
  selectedProducts2: any;

  id: any;
  idnumber: any;

  constructor(public dataService:DataService,private ProductService:ProductsService,public dataCartService:DataCartService,private rout:ActivatedRoute, private router:Router){
    this.products= this.ProductService.getProductData(this.id);
  }


    

  


ngOnInit(): void {
  this.dataService.selectedProducts$.subscribe(products=>{
    this.selectedProducts=products;
  });

  this.selectedProducts2=this.dataCartService.selectedProducts2$;

}


remove(product:string){
  const index = this.selectedProducts.indexOf(product);
   if (index !== -1){
    this.selectedProducts.splice(index,1);
}
}

 @Input() product:any;
 quantity:number=0;

 increaseProduct(){
  const index = this.selectedProducts.indexOf(this.quantity);
  this.quantity++;
 }


 decreaseProduct(){
if(this.quantity>0){
     this.quantity--;
  this.product.quantity = this.quantity;
  }
  
if(this.quantity === 0){
  const index = this.selectedProducts.indexOf(this.quantity);
   this.selectedProducts.splice(index,1);
 }
 }




 
 loginNavigate(){
  this.router.navigate(['/login']);
}

ShopNavigate(){
  this.router.navigate(['/cart']);
}


option="";
navbar(value:string){
  if(value==='history'){
    this.router.navigate(['/history']);
  }
else if(value==='product'){
  this.router.navigate(['/product']);
}
else if(value==='login'){
  this.router.navigate(['/login']);
}




}



}




