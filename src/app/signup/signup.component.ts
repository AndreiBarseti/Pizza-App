import { Component, OnInit } from '@angular/core';
import { InMemoryDataService } from '../in-memory-data.service';
import { User } from '../user';
import { USERS } from 'src/mock-users';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { MessageService } from '../message.service';
import {FormControl, Validators} from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  users: User[]= [];

  constructor(private userService: UserService, 
    private router: Router,
    private messageService: MessageService, 
    private inMemoryDataService: InMemoryDataService) { }
  hide = true;
  hideSecond = true;

  ngOnInit(): void {
  }



  add(name: string, password: string, passwordVerify: string): void {
    name = name.trim();
    password = password.trim();
    if (!name) { return; }
    if ( password != passwordVerify)
    {
      alert('parolele nu coincid')
      return;
    }
    if (this.inMemoryDataService.isDuplicate(name))
    {
      alert('eroare username folosit')
      return;
    }
    this.inMemoryDataService.addUser({ name, password } as User)
      .subscribe(user => {
        this.router.navigate(['/pizza-dashboard']); //ma duce la first page
      });
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';

  }

}

