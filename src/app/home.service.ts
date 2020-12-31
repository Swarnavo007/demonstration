import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {IData} from './data';
import {debounce, map,take,tap,timeInterval} from 'rxjs/operators';
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

  previous=[];

  getExternal(){
    return this.http.get<IData[]>('https://jsonplaceholder.typicode.com/posts').pipe(
     //take(0)  //returns no observable so no array returned
    //  tap(data=>this.previous=data),
    //  map(data=>{
    //    data.forEach(element=>{
    //      element.id=element.id+1;
    //    })
    //    return data;
    //  }),
    // take(10)
    // map(data=>{
    //   for(var i=0;i<10;i++){
    //     this.previous[i]=data[i]
    //   }
    //   return this.previous;
    // })
    map(data=>data.splice(0,10))
    );
  }
}
