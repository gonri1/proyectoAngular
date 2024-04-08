import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serviceBol'
})
export class ServiceBolPipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): string {
    if (value == true) {

      return "completado";
    } else {
      return "Incompleto";
    }
  }

}
