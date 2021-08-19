import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any =[]; 
  public productList = new BehaviorSubject<any>([]); 
  //se poarta ca un Observable, putem sa-i dam subscribe
  // BehaviourSubject will return the initial value or the current 
  //  value on Subscription

  // Subject does not return the current value on Subscription. 
  //    It triggers only on .next(value) 
  //    call and return/output the value
// BehaviorSubject ar trebui creat cu o valoare initiala pe cand
//  Subject nu ar trebui
/*
const subject = new Rx.Subject();
subject.next(1);
subject.subscribe(x => console.log(x)); ->> aici nu afiseaza nimic


const subject = new Rx.BehaviorSubject(0);
subject.next(1);
subject.subscribe(x => console.log(x)); ->> aici afisez 1
*/

  constructor() { }
  getProducts(){
    return this.productList.asObservable(); //returnam lista ca Obs
    //oricine foloseste de getProduct poate sa dea subscribe 
    // datelor din productList 
  }



  addToCart(product : any) {
    if(this.cartItemList.indexOf(product) == -1) 
    {
     this.cartItemList.push(product);
     console.log(this.cartItemList);
     this.productList.next(this.cartItemList); 
     this.getTotalPrice();
    }
     else
     {
       
      this.cartItemList.pop(product);
      product.quantity +=1;
      this.cartItemList.push(product);
      this.productList.next(this.cartItemList);
      this.getTotalPrice;

     }
  }

  getTotalPrice() : number{
    let Total = 0;
    this.cartItemList.map((a : any)=>{
    Total += a.price;
   } )
   return  Total;
  }

  removeCartItem(product : any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id === a.id) {
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
    // ca sa imi dispara nr de elemente din cart afisat pe nav-bar
  }

  removeAllCart(){
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}



/*   setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product)
  }

  */