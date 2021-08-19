import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pizza } from '../pizza';
import { PizzaService } from '../pizza.service';
import { Location } from '@angular/common';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-pizza-dashboard',
  templateUrl: './pizza-dashboard-description.component.html',
  providers:[Location],
  styleUrls: ['./pizza-dashboard-description.component.scss']
})
export class PizzaDescriptionComponent implements OnInit {

  @Input() pizza?: Pizza;
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
  
  addtocart( a : any){
    this.cartService.addToCart(this.pizza);
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
