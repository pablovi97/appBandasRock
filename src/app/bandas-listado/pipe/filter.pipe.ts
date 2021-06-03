import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: any): any {
    if (args == '') {
      return value;
    } else {
      var resultBanda = [];
      for (const banda of value) {
        if (this.lowerCase(banda.nombre).indexOf(this.lowerCase(args)) > -1) {
          resultBanda.push(banda)
        }
      }
      return resultBanda;
    }

  }
  
  lowerCase(value) {
    return value.toString().toLowerCase();
  }
}
