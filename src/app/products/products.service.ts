import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataService } from '../data-service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService{


   getProductData(id:number){

    var products=[
      {id:1,name:"نرم کننده مو اکتیو",number:"1", cost:"۱۵۰۰۰۰",rate:"۳.۴",photo:"/assets/images/نرم.jpg"},
    {id:2,name:"  صابون گلنار ",number:"2", cost:"۱۲۰۰۰",rate:"۲.۲",photo:"/assets/images/صابون.jpg"},
    {id:3,name:"  رب گوجه فرنگی چین چین ",number:"3", cost:"۱۹۰۰۰",rate:"۳.۱",photo:"/assets/images/رب.jpg"},
    {id:4,name:"  برنج طارم  ",number:"4", cost:"۳۰۰۰۰",rate:"۴.۵",photo:"/assets/images/برنج.jpg"},
    {id:5,name:" کالباس ۹۰٪  ",number:"5",cost:"۷۰۰۰",rate:"۲.۵",photo:"/assets/images/کالباس.jpg"},
    {id:6,name:" کنسرو ماهی تن ",number:"6",cost:"۹۰۰۰",rate:"۳.۵",photo:"/assets/images/images.jpg"},
    {id:7,name:"شامپو پرژک",number:"7", cost:"۱۵۰۰۰۰",rate:"۳.۴",photo:"/assets/images/شامپو.jpg"},
    {id:8,name:"  دوِغ  ",number:"8", cost:"۱۲۰۰۰",rate:"۲.۲",photo:"/assets/images/دوغ.jpg"},
    {id:9,name:"باتری قلمی",number:"9", cost:"۱۹۰۰۰",rate:"۳.۱",photo:"/assets/images/باتری.jpg"},
    {id:10,name:"    لواشک",number:"10", cost:"۳۰۰۰۰",rate:"۴.۵",photo:"/assets/images/لواشک.jpg"},
    {id:11,name:" کنسرو ماهی تن",number:"11",cost:"۷۰۰۰",rate:"۲.۵",photo:"/assets/images/تن.jpg"},
    {id:12,name:" نوشابه  ",number:"12",cost:"۱۵۰۰۰",rate:"۴.۳",photo:"/assets/images/نوشابه.jpg"},
  ];
    return products;

    // return products.find(product=> product.id===id);


  }




}

