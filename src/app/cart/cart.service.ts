import { Injectable } from '@angular/core';
import { CartItem} from '../shared/cartItem';
import { Product } from '../shared/product';
import { Cart } from '../shared/cart';




@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  
cart:CartItem[]=[];

completedCarts:Cart[]=[];


completeCart(completedCarts:Cart){
  this.completedCarts.push(completedCarts);
}


 addtoCart(CartItem: CartItem){
  let item= this.cart.find(c =>c.productId==CartItem.productId);
  console.log(item);
  if(item){
 item.quantity+=1;
  }
  else{
    this.cart.push(CartItem);
  }
}


removeFromCart(productId: number) {
  const index = this.cart.findIndex(x => x.productId === productId);
  if (index !== -1) {
    this.cart.splice(index,1); 
  }
}



getCartItemsCount(): number {
  return this.cart.length;
}

private totalprice=0;

getTotalPrice() { 
  return this.cart.reduce((total, item) => {
      return total + item.totalCost * item.quantity;
  }, 0);
}




getcheckout(){
 return this.cart;
}


clearCart(){
 this.cart=[];
}



}



