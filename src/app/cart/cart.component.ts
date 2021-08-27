import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products : Pizza[] = [];
  public totalPrice : number = 0;
  public productList : [Pizza[]] = [[]];

  constructor(private route: Router,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res =>{
      this.products = res;
      this.totalPrice =  this.cartService.getTotalPrice();
    })
   /* this.cartService.getProducts().subscribe(res=>
      {
        this.productList = res;
        this.productList.forEach((a : any ) => {
          Object.assign(a,{quantity: 0, total: a.price})
        });
      }) */
  }
goToDashboard(): void {
  this.route.navigate(['/pizza-dashboard']);
}
removeItem(item : any){
  this.cartService.removeCartItem(item);
}

removeItems(){
  this.cartService.removeAllCart();
}

}
