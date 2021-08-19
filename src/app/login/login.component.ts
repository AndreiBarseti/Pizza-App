import { Component, OnInit } from '@angular/core';
import { InMemoryDataService } from '../in-memory-data.service';
import { User } from '../user';
import { USERS } from 'src/mock-users';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-login-acc',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  users: User[]= [];
  constructor(private userService: UserService, 
    private router: Router,
    private messageService: MessageService, 
    private inMemoryDataService: InMemoryDataService) { }

  ngOnInit(): void {
  }

  login(name: string, password: string): void {
    name = name.trim();
    password = password.trim();
    if (!name) { return; }
    if (!this.inMemoryDataService.isDuplicate(name))
    {
      alert('eroare username-ul nu exista');
      return;
    }
    if (!this.inMemoryDataService.passwordMatches(name,password))
    {
      alert('eroare parola nu coincide');
      return;
    }
    this.userService.loginUser({ name, password } as User)
      .subscribe(user => {
        this.router.navigate(['/pizza-dashboard']); //ma duce la first page
      });
  }

}
