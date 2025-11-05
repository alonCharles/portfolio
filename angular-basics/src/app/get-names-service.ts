import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetNamesService {
  http = inject(HttpClient)
myData: any
  getData() {
       this.http.get('https://swapi.py4e.com/api/starships/').subscribe((res) => {
        this.myData = res
      console.log(this.myData)
  })
  }
 
}
