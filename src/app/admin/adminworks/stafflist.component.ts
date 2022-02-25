import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
@Component({
  selector: 'stafflist',
  templateUrl: 'stafflist.component.html',
})


export class StaffListComponent implements OnInit {

  
  url = "http://localhost:3000/staffrecords";
  lists:any=[];
  check=false;
  all(event:any){
  if(event.target.checked == true){
    this.check = true;
  } 
  else{
    this.check = false;
  }    
  }
 

  constructor(private http:HttpClient) {
      this.http.get(this.url)
          .subscribe(data => {
            this.lists = data;
            // console.log(this.lists);
          });
   }

   Updatedata(){

   }

   
   deletedata(del:any){
    //  console.log(del);
    let index = this.lists.indexOf(del);
    this.lists.splice(index,1)
    // console.log(this.url + del.id)
  this.http.delete(this.url+'/'+del)
  
  .subscribe(data => {
    // console.log(data);
  });
    
   }
  
  ngOnInit(): void {
  }
 
  
}
