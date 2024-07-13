import { Component } from '@angular/core';
import { HistoryService } from './history.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.css'
})
export class OrderHistoryComponent {

orderedGoods;


constructor(private HistoryService:HistoryService,private rout:ActivatedRoute, private router:Router){
  this.orderedGoods= this.HistoryService.getorderedGoodsData();
}


ShopNavigate(){
  this.router.navigate(['/code']);
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
