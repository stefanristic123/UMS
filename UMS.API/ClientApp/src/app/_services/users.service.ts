import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  // private basePath = 'https://localhost:5001/api/Users'; .NET API for users

  private basePath = 'http://localhost:3000/users';

  constructor(
    private http: HttpClient
  ) { }

  public getUsers(page: any, limit: any): Observable<any>{
    return this.http.get(this.basePath+'?_page='+page+'&_limit='+limit);
  }

  public getSingleUser(id: any): Observable<any>{
    return this.http.get(this.basePath+'/'+id)
  }

  public addUser(user: any): Observable<any>{
    return this.http.post(this.basePath, user);
  }

  public editUser(user: any): Observable<any>{
    return this.http.put(this.basePath+'/'+user.id, user);
  }

  public deleteUser(id: any): Observable<any>{
    return this.http.delete(this.basePath+'/'+id);
  }

  public searchUsers(find: any): Observable<any>{
    return this.http.get(this.basePath+'?q='+find)
  }
}
