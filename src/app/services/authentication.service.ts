import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of, Subscriber, throwError } from 'rxjs';
import { Users } from '../models/users';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  users : Users[]=[];
  user= new Users();
  getData!: string;
  //logInUrl = '';
 // logOutUrl = '';
 authenticatedUser: Users | undefined;

  constructor(private httpClient: HttpClient) { 
    //this.users.push(email:"user1@gmal.com")
  }


  public login(userFormGroup: FormGroup)
  {
    return this.httpClient.post("http://127.0.0.1:8000/api/login",userFormGroup);
  }

  public login2(userFormGroup: FormGroup):Observable<Users>
  {
     console.log("--------------------------------------------");
    console.log(userFormGroup);
    /*this.login(userFormGroup).subscribe(res => {
      this.user = res;
     // console.log(res);
        });*/
        this.login(userFormGroup).subscribe(res => {this.user=res} );
        //this.user = this.login(userFormGroup);
        //this.getData=JSON.stringify(this.user);
        //console.log(this.getData);
        console.log("--------------------------------------------");
        console.log(Object.keys(this.user));
        console.log(this.user);
    if(!Object.keys(this.user).length) return throwError(()=>new Error("Identifiants incorrects"));
   /*if(this.user.email==undefined) return throwError(()=>new Error("User not found"));*/
    
       // this.getData = JSON.stringify(this.user);
       // console.log(this.getData);
    return of(this.user);
    //{this.user}}
  }

  public authenticateUser(user: Users):Observable<boolean>
  {
    this.authenticatedUser= user;
    localStorage.setItem("authUser", JSON.stringify({email: user.email,firstname:  user.firstname, lasntname: user.lastname, roles: user.roles, jwt: "JWT_TOKEN"}));
   // console.log(authUser);
    return of(true);
  }

  public hasRole(role :string) : boolean
  {
    return  this.authenticatedUser!.roles!.includes(role);
  }

  public isAuthenticated()
  {
    return this.authenticatedUser!=undefined;
  }

  public logOut():Observable<boolean>
  {
      this.authenticatedUser=undefined;
      localStorage.removeItem("authUser");
      return of(true);
  }

  LoginData(pEmail:any,pPassword:any)
  {
    const loginData = { email: pEmail, password: pPassword}

    return new Observable<boolean>((observer:Subscriber<boolean>) => {
      this.httpClient.post('http://127.0.0.1:8000/api/login',loginData).subscribe( result => {
        observer.next(true);
        observer.complete();
      }, error => {
        observer.error(false);
        observer.complete();
      });
    });
  }

  LogoutData()
  {
    return new Observable<boolean>((observer:Subscriber<boolean>) => {
      this.httpClient.get('http://127.0.0.1:8000/api/logout').subscribe( result => {
        observer.next(true);
        observer.complete();
    }, error => {
      observer.error(false);
      observer.complete();
    });
  });
  }
}
