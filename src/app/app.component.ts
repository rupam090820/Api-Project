import { Component, OnInit } from '@angular/core';
//import datashare
import { DataShareService } from './data-share.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'apiProject';
  public recived_api:any=[];
  constructor(private data:DataShareService){}
  ngOnInit(): void {
    this.data.getApi().subscribe((item:any)=>{
      this.recived_api=item;
      // console.log(this.recived_api);
      });
    
  }
  
}
