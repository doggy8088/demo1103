import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'badwords'
})
export class BadwordsPipe implements PipeTransform {

  transform(value: string, args?: string[]): any {
    for(let str of args) {
      value = value.replace(str, '***'); 
    }
    return value;
  }

}
