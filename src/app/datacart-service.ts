import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
  })


export class DataCartService{
    private selectedProducts2:string[]=[];
    selectedProducts2$=new BehaviorSubject<any[]>([]);

    constructor(){}


    

    setSelectedProduct2(product:any){
        this.selectedProducts2.push(product);
        this.selectedProducts2$.next(this.selectedProducts2);


    }

    
  
    getSelectedProductsCount2(): number {
      return this.selectedProducts2.length;
    }



remove(product: string) {
  // this.getSelectedProductsCount2-1;
  const index = this.selectedProducts2.indexOf(product);
  if (index !== -1) {
      this.selectedProducts2.splice(index, 1);
      this.selectedProducts2$.next(this.selectedProducts2);
  }
}


}
