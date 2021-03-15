import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'absoluteValue'
})
export class AbsoluteValuePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return Math.abs(value as number);
  }
}

