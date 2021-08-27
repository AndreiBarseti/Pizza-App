import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pizza } from '../pizza';
import { PizzaService } from '../pizza.service';
import { Location } from '@angular/common';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-pizza-dashboard',
  templateUrl: './pizza-dashboard-description.component.html',
  providers:[Location],
  styleUrls: ['./pizza-dashboard-description.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PizzaDescriptionComponent implements OnInit {

  @Input() pizza: Pizza ;
  public productList : any;
  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private pizzaService: PizzaService,
    private location: Location,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.getPizza(); 
    
    
  }
  
  addToCart( pizza: Pizza){
    this.cartService.addToCart(pizza);
  }

  getPizza(): void {
    const id = Number(this.router.snapshot.paramMap.get('id')); 
    this.pizzaService.getPizza(id).subscribe(pizza => this.pizza = pizza
      )
     ;
    
    
  }
  goToCart(): void {
    this.route.navigate(['/cart']);
  }

 

}
