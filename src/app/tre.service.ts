import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TreService {

  constructor(private ht:HttpClient) { }
  ge(){
    return this.ht.get('http://localhost:3000/posts')
  }
  po(a){
    return this.ht.post('http://localhost:3000/posts',a)
  }
  de(c){
    return this.ht.delete('http://localhost:3000/posts/' + c)
  }
  pu(c){
    return this.ht.put('http://localhost:3000/posts/' + c.id,c)
  }
}
