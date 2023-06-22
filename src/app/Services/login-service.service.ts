import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
 logstatus:boolean= false;
  baseUrl:string ='https://devrunner.co.in/machine_test/index.php/web_api/Users/';

  httpheader: HttpHeaders= new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http:HttpClient) { }

  UserLoggedIn(){

    return this.logstatus=true;
  }

  GetDataFromServer(endPoint:any){
    const Url= this.baseUrl + endPoint;
    return this.http.get(Url, {headers:this.httpheader})

   }
}
