import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignService {
  
  private basePath = 'http://localhost:3000/assign';

  constructor(
    private http: HttpClient
  ) { }

  public getAssign(): Observable<any>{
    return this.http.get(this.basePath);
  }

  public addAssignPremissions(data: any): Observable<any>{
    return this.http.post(this.basePath, data);
  }

  public editAssignPremissions(data: any): Observable<any>{
    return this.http.put(this.basePath+'/'+data.id, data);
  }

}
