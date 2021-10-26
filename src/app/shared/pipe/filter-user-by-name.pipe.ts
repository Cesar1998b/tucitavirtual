import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUser',
})
export class FilterUserByNamePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 1){
      return value;
    }
    const resultUsers = [];
    for (const cita of value) {
      if (cita.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultUsers.push(cita);
      }
    }
    return resultUsers;
  }
}
