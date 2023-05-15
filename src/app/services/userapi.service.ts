import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IUser } from '../models/IUser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserapiService {
  private httpOptionsHeders={}

 constructor(private httpClient: HttpClient) {
    this.httpOptionsHeders={
      headers:new HttpHeaders(
        {
          'Content-Type':'application/json'
        })
    };
   }

   getAllUsers():Observable< IUser[]>{
    return this.httpClient.get< IUser[]>(`${environment.APIBaseURL}/users`)
   }



   getUserById(userId:number):Observable< IUser>{
    return this.httpClient.get< IUser>(`${environment.APIBaseURL}/users/${userId}`)
   }


   pushNewUser(user: IUser):Observable< IUser>{
    return this.httpClient.post< IUser>(`${environment.APIBaseURL}/users`,JSON.stringify(user),this.httpOptionsHeders);
   }


   updateUserById(user: IUser , userID:number):Observable< IUser>{
    return this.httpClient.patch< IUser>(` ${environment.APIBaseURL}/users/${userID}`,JSON.stringify(user) , this.httpOptionsHeders );
   }

   deleteUserById(userID:number):Observable< IUser>{
    return this.httpClient.delete< IUser>(`${environment.APIBaseURL}/users/${userID}`, this.httpOptionsHeders );
   }
 }

