import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:8080/';

  constructor(private http: HttpClient) {
  }

  createUser(user: User): Observable<User> {
    console.log("in service")
    return this.http.post<User>(this.url + 'users', user);
  }
}
