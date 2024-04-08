import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenes'
})

//Pipe que si no hay imagen, nos muestra una generica

export class ImagenesPipe implements PipeTransform {

  transform(value: string, ...args: any[]): unknown {

    if (value.length > 0) {
      return value;

    } else {
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSe5IUQ8zQMjQXykiv8FMlF9IMnV8DFxuEq4fOnYHVEg&s";

    }
  }

}
