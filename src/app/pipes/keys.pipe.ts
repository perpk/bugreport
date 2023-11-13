import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys',
  standalone: true
})
export class KeysPipe implements PipeTransform {

  transform(value: object, ...args: unknown[]): Array<string> {
    return Object.keys(value);
  }
}
