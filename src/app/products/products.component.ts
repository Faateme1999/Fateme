import { Component, EventEmitter, Input, input, OnInit, Output } from '@angular/core';
import { ProductsService } from './products.service';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { DataService } from '../data-service';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
    
  products;
  id: any;
  idnumber: any;
    constructor(private ProductService:ProductsService,private rout:ActivatedRoute, private router:Router,private dataService: DataService, private activeRoute:ActivatedRoute){
    this.products= this.ProductService.getProductData(this.id);
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




    ngOnInit(): void {
      this.activeRoute.queryParams.subscribe(params=>{
        this.idnumber=params['id'];
      })  

    }



};



  




  

