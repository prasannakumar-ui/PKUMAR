import { Component } from '@angular/core';
import {TreService} from './tre.service';
import {FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data
constructor(private tr:TreService, private fb:FormBuilder){this.getdata()}
  lform=this.fb.group({
    id:[],
    fname:[],
    lname:[]
  })
  getdata(){
    this.tr.ge().subscribe(res=>this.data=res)
  }
pos(){
  this.tr.po(this.lform.value).subscribe(res=>this.getdata());
  this.lform.reset()
}
del(m){
  this.tr.de(m.id).subscribe(res=>this.getdata())
}
ed(m){
  this.lform.patchValue({
    id:m.id,
    fname:m.fname,
    lname:m.lname
  })
}
put(){
  this.tr.pu(this.lform.value).subscribe(res=>this.getdata());
  this.lform.reset()
}
}
