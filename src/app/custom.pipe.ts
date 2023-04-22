import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any, filterstring:string): any {
   if(filterstring.length>=3){
    let searchdata=value.filter((item:any)=>{
     return (item.food_name.toLowerCase().includes(filterstring.toLowerCase()));
    });
    return searchdata;
   }
      else{
    return value;
   }
  }

}
