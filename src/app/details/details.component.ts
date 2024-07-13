import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailsService } from './details.service';
import { DataService } from '../data-service';
import { ProductsService } from '../products/products.service';
import { from, switchMap } from 'rxjs'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  productDetails: any;
  products: { id: number; name: string; number: string; cost: string; rate: string; photo: string; }[] | undefined;
 

constructor(private DetailService:DataService, private activeRoute:ActivatedRoute, private router:Router ,private rout:ActivatedRoute,private dataService: DataService,private ProductService:ProductsService){
 }



  ngOnInit(): void {
let id= +this.activeRoute.snapshot.params['id'];
console.log(id);


// this.ProductService.getProductData('id').subscribe((res:any)=>{
//   this.productDetails=res});

  this.products= this.ProductService.getProductData(id);
  this.productDetails=this.products.find((product: { id: any; }) =>
    product.id === id);

  // this.productDetails=this.ProductService.getProductData(id);
  



// this.rout.paramMap.pipe(switchMap(params=>{
//   const productId = +params.get('id')
//  return this.ProductService.getProductData('productId');})).subscribe(product=>{
//     this.products=product});
// }





  //   this.activeRoute.paramMap.subscribe(params=>{
  //     this.id=params.get('id');
  //     this.products= this.ProductService.getProductData(this.id);
  // this.productDetails=this.products.find((product: { id: any; }) =>
  //   product.id === this.id);
  //   })

  




//      this.ActivatedRoute.params.subscribe(params=>{
//   this.productId= +params['id'];
//   this.product= this.ProductService.getProductById(this.productId);

//  })



    // this.activeRoute.queryParams.subscribe(params=>{
    //   this.id=params['id'];
    // })   

  // }


  // console(){
  //   console.log(thid);
    
  // }



  



// export class productDetails{
//   name:string="";
//   id:any="";
//   cost:string="";
//   rate:string="";
// }
}

}