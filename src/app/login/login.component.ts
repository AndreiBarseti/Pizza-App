import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { InMemoryDataService } from '../in-memory-data.service';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import {  FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-login-acc',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {

  hide = true;
  users: User[]= [];
  form: FormGroup;
  submitted = false;


  constructor(private userService: UserService, 
    private router: Router,
    private inMemoryDataService: InMemoryDataService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({})
  }

  login(username: string, password: string): void {
    username = username.trim();
    password = password.trim();
    if (!username) { return; }
    if (!this.inMemoryDataService.isDuplicate(username))
    {
      alert('eroare username-ul nu exista');
      return;
    }
    if (!this.inMemoryDataService.passwordMatches(username,password))
    {
      alert('eroare parola nu coincide');
      return; 
    }
    this.userService.loginUser({ username, password } as User)
      .subscribe(user => {
        this.router.navigate(['/pizza-dashboard']); //ma duce la first page
       });

    
  }
   signUp() :void{
    this.router.navigate(['/signUp'])
   }
}


