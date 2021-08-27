import { Component, HostBinding, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { UserService } from '../user.service';
import { InMemoryDataService } from '../in-memory-data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private isDark = true;
  @HostBinding('class')
  get themeMode(){
    return this.isDark ? 'darkMode' : 'lightMode';

  }

  public totalItems : number = 0;
  public usernameLoged : string;
  constructor(private cartService: CartService,
  private userService: UserService,
  ){}

  ngOnInit() : void{
    
 
    this.userService.getUserLoged().subscribe(
      res=>{
      this.usernameLoged = res.username;
       } )
       
    

    this.cartService.getProducts()
    .subscribe(res =>{
      this.totalItems = 0;
      let i = 0;
      while(i < res.length)
      {
      this.totalItems += res[i].quantity ;
      i += 1;
    }
   })
    
  }
  signOut(){
    this.userService.signOut();
  }
  
}
