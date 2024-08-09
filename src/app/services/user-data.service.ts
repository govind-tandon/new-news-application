import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  url = "http://localhost:4000/EmployeeDetails";
  constructor(private http:HttpClient) { }
  users()
  { 
    return this.http.get(this.url);
  }

  saveUsersData(data:any){
    return this.http.post(this.url,data);
  }
}
