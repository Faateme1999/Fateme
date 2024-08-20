import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataService } from '../data-service';
import { Product } from '../shared/product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService{

products=[{id:1,name:"نرم کننده مو اکتیو",number:"۱",cost:15000,rate:"۳.۴",photo:"/assets/images/نرم.jpg",clubRate:"۶",quantity:0,
    properties:[{weight:"۸۰۰",kind:" آسان باز شو"}],seller:[{name:"عماد",rate:"منتخب",satisfaction:"۹۲.۸٪",function:"عالی",send:"ارسال فوری"}]},
    {id:2,name:"  رب گوجه فرنگی چین چین ",number:"۲", cost:19000,rate:"۳.۱",photo:"/assets/images/رب.jpg",clubRate:"۶",quantity:0,properties:[{weight:"۸۰۰",kind:" آسان باز شو"}],seller:[{name:"عماد",rate:"منتخب",satisfaction:"۹۲.۸٪",function:"عالی",send:"ارسال امروز(فعلا در شهر تهران و کرج)"}]},
    {id:3,name:"شامپو پرژک",number:"۳", cost:15000,rate:"۳.۴",photo:"/assets/images/شامپو.jpg",clubRate:"۶",quantity:0,properties:[{weight:"۸۰۰",kind:"نوع در : آسان باز شو"}],seller:[{name:"منتخب",rate:"منتخب",satisfaction:"۹۲.۸٪",function:"عالی",send:"ارسال امروز(فعلا در شهر تهران و کرج)"}]},
{id:4,name:"  برنج طارم  ",number:"۴", cost:30000,rate:"۴.۵",photo:"/assets/images/برنج.jpg",clubRate:"۶",quantity:0,properties:[{weight:"۸۰۰",kind:"نوع در : آسان باز شو"}],seller:[{name:"منتخب",rate:"منتخب",satisfaction:"۹۲.۸٪",function:"عالی",send:"ارسال امروز(فعلا در شهر تهران و کرج)"}]},
{id:5,name:" کالباس ۹۰٪  ",number:"۵",cost:7000,rate:"۲.۵",photo:"/assets/images/کالباس.jpg",clubRate:"۶",quantity:0,properties:[{weight:"۸۰۰",kind:"نوع در : آسان باز شو"}],seller:[{name:"منتخب",rate:"منتخب",satisfaction:"۹۲.۸٪",function:"عالی",send:"ارسال امروز(فعلا در شهر تهران و کرج)"}]},
{id:6,name:" کنسرو ماهی تن ",number:"۶",cost:9000,rate:"۳.۵",photo:"/assets/images/images.jpg",clubRate:"۶",quantity:0,properties:[{weight:"۸۰۰",kind:"نوع در : آسان باز شو"}],seller:[{name:"منتخب",rate:"منتخب",satisfaction:"۹۲.۸٪",function:"عالی",send:"ارسال امروز(فعلا در شهر تهران و کرج)"}]},
{id:7,name:"  صابون گلنار ",number:"۷", cost:1200,rate:"۲.۲",photo:"/assets/images/صابون.jpg",clubRate:"۶",quantity:0,properties:[{weight:"۸۰۰",kind:"نوع در : آسان باز شو"}],seller:[{name:"منتخب",rate:"منتخب",satisfaction:"۹۲.۸٪",function:"عالی",send:"ارسال امروز(فعلا در شهر تهران و کرج)"}]},
{id:8,name:"  دوِغ  ",number:"۸", cost:12000,rate:"۲.۲",photo:"/assets/images/دوغ.jpg",clubRate:"۶",quantity:0,properties:[{weight:"۸۰۰",kind:"نوع در : آسان باز شو"}],seller:[{name:"منتخب",rate:"منتخب",satisfaction:"۹۲.۸٪",function:"عالی",send:"ارسال امروز(فعلا در شهر تهران و کرج)"}]},
{id:9,name:"باتری قلمی",number:"۹", cost:19000,rate:"۳.۱",photo:"/assets/images/باتری.jpg",clubRate:"۶",quantity:0,properties:[{weight:"۸۰۰",kind:"نوع در : آسان باز شو"}],seller:[{name:"منتخب",rate:"منتخب",satisfaction:"۹۲.۸٪",function:"عالی",send:"ارسال امروز(فعلا در شهر تهران و کرج)"}]},
{id:10,name:"    لواشک",number:"۱۰", cost:40000,rate:"۴.۵",photo:"/assets/images/لواشک.jpg",clubRate:"۶",quantity:0,properties:[{weight:"۸۰۰",kind:"نوع در : آسان باز شو"}],seller:[{name:"منتخب",rate:"منتخب",satisfaction:"۹۲.۸٪",function:"عالی",send:"ارسال امروز(فعلا در شهر تهران و کرج)"}]},
{id:11,name:" کنسرو ماهی تن",number:"۱۱",cost:8000,rate:"۲.۵",photo:"/assets/images/تن.jpg",clubRate:"۶",quantity:0,properties:[{weight:"۸۰۰",kind:"نوع در : آسان باز شو"}],seller:[{name:"منتخب",rate:"منتخب",satisfaction:"۹۲.۸٪",function:"عالی",send:"ارسال امروز(فعلا در شهر تهران و کرج)"}]},
{id:12,name:" نوشابه  ",number:"۱۲",cost:15000,rate:"۴.۳",photo:"/assets/images/نوشابه.jpg",clubRate:"۶",quantity:0,properties:[{weight:"۸۰۰",kind:"نوع در : آسان باز شو"}],seller:[{name:"منتخب",rate:"منتخب",satisfaction:"۹۲.۸٪",function:"عالی",send:"ارسال امروز(فعلا در شهر تهران و کرج)"}]},
];

   getProductData(id:number){
    return this.products;
   }

   
    getproduct(id:number){
 return this.products.find(p=>p.id===id)as Product;
    }


    getproductquantity(quantity:number){
return this.products.find(p=>p.quantity===quantity);
    }





}

