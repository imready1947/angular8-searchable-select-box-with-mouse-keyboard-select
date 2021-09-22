import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textSearch'
})
export class TextSearchPipe implements PipeTransform {

  transform(items: any[], keyName: string, text?: any): any {
    if(!text || !keyName){
      return items;
    }
    return items.filter((item)=>{
      // if(item.display && typeof item.display === 'string'){
      //   return item.display.toLowerCase().indexOf(text.toLowerCase())> -1;
      // }
      if(item[keyName] && typeof item[keyName] === 'string'){
        return item[keyName].toLowerCase().indexOf(text.toLowerCase())> -1;
      }

      return false;
    })
  }

}