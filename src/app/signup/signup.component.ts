import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { InMemoryDataService } from '../in-memory-data.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { Validators} from '@angular/forms';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SignupComponent implements OnInit {
  users: User[]= [];
  form: FormGroup;
  submitted = false;

  constructor(
    private router: Router,
    private inMemoryDataService: InMemoryDataService,
    private formBuilder: FormBuilder) { }
  hide = true;
  hideSecond = true;

  ngOnInit(): void {


    this.form = this.formBuilder.group(
      {
        name: [
          '',
          [
           Validators.required, 
           Validators.pattern('^[a-zA-Z \-\']+')
          ]
         ],
        postalCode: [
          Validators.required,
          Validators.pattern("^[0-9]*$"),
        ],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(32)
          ]
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      },
      {
       // validators: [Validation.match('password', 'confirmPassword')]
      }
    );




  }



  add(username: string, name:String, password: string, passwordVerify: string, email:string): void {
    username = username.trim();
    password = password.trim();
    if (!username) { return; }
    if ( password != passwordVerify)
    {
      alert('parolele nu coincid')
      return;
    }
    if (this.inMemoryDataService.isDuplicate(username))
    {
      alert('eroare username folosit')
      return;
    }
    this.inMemoryDataService.addUser({ name,username, password, email } as User)
      .subscribe(user => {
        this.router.navigate(['/pizza-dashboard']); //ma duce la first page
      });
  }
  login():void{
    this.router.navigate(['/login']);
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
    //ca sa pun f.username in loc de form.control.username
  }

}

