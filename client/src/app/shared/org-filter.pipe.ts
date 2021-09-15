import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orgFilter'
})
export class OrgFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
