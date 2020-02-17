import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cube'
})
export class CubePipe implements PipeTransform {

  
  transform(x:any):any {
    
   if(x){
      x.forEach(element => {
        return element.name
      // console.log( element.name); 
       
     });
      
  } else{
    return x;
  }
  
  }
}
