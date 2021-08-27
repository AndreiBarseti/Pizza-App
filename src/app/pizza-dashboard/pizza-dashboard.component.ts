import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Pizza } from '../pizza';
import { PizzaService } from '../pizza.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './pizza-dashboard.component.html',
  styleUrls: ['./pizza-dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PizzaDashboardComponent implements OnInit {

  pizzas: Pizza[] = [];
  p: any;

  constructor(private pizzaService: PizzaService,
    private router:Router) { }

  ngOnInit() {
    this.getPizzas();
  }

  getPizzas(): void {
    this.pizzaService.getPizzas()
      .subscribe(pizzas => this.pizzas = pizzas.slice(0, 5));
  }

  goToDescription(id : number): void {
    this.router.navigate(['/detail', id]);
  }

}
