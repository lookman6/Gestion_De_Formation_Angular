import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { Users } from 'src/app/models/users';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = new Users();
  email = '';
  password = '';
  wrongCredentials =  false;
  errorMessage : any;
  test! : Users;

userFormGroup! : FormGroup;

//private authenticationService:AuthenticationService, private router:Router

  constructor(private fb: FormBuilder, private router:Router,private authenticationService:AuthenticationService) { }

  ngOnInit(): void {

this.userFormGroup=this.fb.group({
  email : this.fb.control(""),
  password : this.fb.control("")
});
/*new FormGroup({

email : new FormControl(),
password : new FormControl()

});*/ 
  }

  handleLogin2()
  {
    this.authenticationService.login(this.userFormGroup).subscribe(res => {
      this.user = res;
    });
    if(!this.user) return throwError(()=>new Error("User not found"));

    return of(this.user);
  }

  handleLogin()
  {
    let email = this.userFormGroup.value.email;
    //console.log(email);
    let password = this.userFormGroup.value.password;

    //console.log(password);
    //console.log(this.userFormGroup);
     //this.authenticationService.login2(this.userFormGroup.getRawValue()).subscribe(res => console.log(res), err => console.log(err));
     //console.log(this.test);
    this.authenticationService.login2(this.userFormGroup.getRawValue()).subscribe({ next : (us : Users)=>{
      this.authenticationService.authenticateUser(us).subscribe({
        next : (data : boolean) =>{
      this.router.navigateByUrl("home");
    }
    });
    },
    error : (err)=>{
        this.errorMessage = err;
    }
  });
  }

  /*login()
   {
    this.wrongCredentials =false;
    this.authenticationService.LoginData(this.user.email,this.user.password).subscribe(result => {
      this.router.navigate(['home']);
    },
    error => {
      this.wrongCredentials = true;
    });
   }*/

}
