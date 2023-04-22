import { Component, OnInit } from '@angular/core';
//import datashare
import { DataShareService } from '../data-share.service';



@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
public api_data:any=[];
public searchfood:any='';
public p:any=1;
public totalulist:any;
  constructor(private data2:DataShareService) { }

  ngOnInit(): void {
    this.data2.getApi().subscribe((item)=>{
   this.api_data=item;
   this.totalulist=this.api_data.length;
   console.log(this.totalulist);
     
    });
  }

}
