import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'addstu',
  templateUrl: 'addstu.component.html',
  styleUrls: ['./adminworks.component.css']
})
export class AddStuComponent implements OnInit {

  url = "http://localhost:3000/studentrecords";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  // put http
      
  saveform(val:HTMLInputElement){
    // let p = {title:val.value}
    // this.lists.splice(0,0,p);
    val.value="";
    this.http.post(this.url, val)
    .subscribe(data => {
      // console.log(data);
       
    }
    
    )
  }

}
