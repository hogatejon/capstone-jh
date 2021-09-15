import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string): string {
    const strippedNumbers = value.replace(/\D/g, '');

    return `(${strippedNumbers.substr(0, 3)}) ${strippedNumbers.substr(3, 3)}-${strippedNumbers.substr(6)}`
  }

}
