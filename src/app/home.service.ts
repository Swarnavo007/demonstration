import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {IData} from './data';
import {map,take,tap,timeInterval} from 'rxjs/operators';
import {App} from './app';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }


  public details=[];

  getDetails(){
    return this.details;
  }

  createDetails(det){
    return this.details.push(det);
  }

  getExternal(){
    return this.http.get<IData[]>('https://jsonplaceholder.typicode.com/posts').pipe(
     take(0)  //returns no observable so no array returned
    );
  }
}
