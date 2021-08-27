import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MessagesComponent } from './messages/messages.component';
import { PizzaDashboardComponent } from './pizza-dashboard/pizza-dashboard.component';
import { PizzaDescriptionComponent } from './pizza-dashboard-description/pizza-dashboard-description.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { LoginComponent } from './login/login.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    MessagesComponent,
    PizzaDashboardComponent,
    PizzaDescriptionComponent,
    LoginComponent,
    CartComponent,
    HeaderComponent,
    ProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,  
    MatToolbarModule, 
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    MatButtonModule,
    MatCardModule,


    MatButtonToggleModule,
    NgxPaginationModule,
    
    
  ],
  
  providers: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
