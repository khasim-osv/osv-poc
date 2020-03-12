import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

interface IUsers{
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private message = new BehaviorSubject<string>("my text");
  constructor(private http: HttpClient) { }
  getMockData(): Observable<IUsers[]> {
    //return [1,2,3,4,5];
    //return this.http.get('https://api.github.com/users').pipe(map((result: any[]) => result.map((obj:any) => <IUsers>{id: obj.id})));
    return this.http.get('https://api.github.com/users').pipe(map((result: IUsers[]) => result.map((obj:IUsers) => ({id: obj.id} as IUsers))));
  }
  getMessage(): Observable<string> {
    return this.message.asObservable();
  }
  updateMessage(message: string) {
    this.message.next(message);
  }
}
