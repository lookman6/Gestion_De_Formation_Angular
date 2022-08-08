import { UntypedFormBuilder } from "@angular/forms";

export class Users {

        id?:BigInteger;
        cin?:any;
        firstname?:string;
        lastname?:string;
        birthday?:Date;
        sex?:string;
        phone?:string;
        email?:string;
        password?:string;
        roles?: string[];

}
