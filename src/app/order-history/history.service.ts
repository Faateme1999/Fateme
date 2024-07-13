import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {


  constructor() { }

getorderedGoodsData(){

 var orderedGoods=[{date:"۲ ۱۴۰۲آذر", code:"2270",cost:"1,150,180",discount:"292,000",photo:"/assets/images/رب.jpg",grade:"111"},
    {date:"۹ ۱۳۹۹ دی", code:"1379",cost:"11,300",discount:"1,100",photo:"/assets/images/نرم.jpg ",grade:"5"},
  ]

  return orderedGoods;
}








}
