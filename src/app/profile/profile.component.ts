import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { InMemoryDataService } from '../in-memory-data.service';
import { User } from '../user';
import { UserService } from '../user.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-profile-page',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {
  users: User[]= [];
  form: FormGroup;
  submitted = false;

  constructor(private userService: UserService, 

    private inMemoryDataService: InMemoryDataService,
    private formBuilder: FormBuilder) { }
  hide = true;
  hideSecond = true;
  public showName : string;
  public showUsername : string;
  public showCity : string;
  public showAddress : string;
  public showPhone : string;
  public showPostalCode: string;
  public showEmail: string;

  ngOnInit(): void {

  this.showName = this.userService.currentUserLogIn.name;
  this.showCity = this.userService.currentUserLogIn.city;
  this.showUsername = this.userService.currentUserLogIn.username;
  this.showAddress = this.userService.currentUserLogIn.adress;
  this.showPhone = this.userService.currentUserLogIn.phone;
  this.showPostalCode = this.userService.currentUserLogIn.postalCode;
  this.showEmail = this.userService.currentUserLogIn.email;

    this.form = this.formBuilder.group(
      {
        name: [
          '',
          [
         
           Validators.pattern('^[a-zA-Z \-\']+')
          ]
         ],
         city: [
          '',
          [
         
           Validators.pattern('^[a-zA-Z \-\']+')
          ]
         ],
         postalCode: [
          '',
          [
           
           Validators.pattern("^[0-9]*$"),
           Validators.minLength(6),
           Validators.maxLength(6),
          ]
         ],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],

        phone: ['',[Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern
  ('^(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|\-)?([0-9]{3}(\s|\.|\-|)){2}$')]],
        email: ['', [ Validators.email]],
        address: ['',[]],
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


 
  modify
  (name:string, city:string, postalCode:string,
  deliveryAddress:string, username:string, email:string,
  password:string, passwordVerify:string, phone:string) {


    name = name.trim();
    username = username.trim();
    password = password.trim();
    passwordVerify = passwordVerify.trim();
    if (!name) {return;}
    if ( password != passwordVerify)
    { alert('password matching error')
      return;
    }
    this.inMemoryDataService.modifyUser(
     username,
     city,
     postalCode,
     deliveryAddress,
     email,
     password,
     phone
    );

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

