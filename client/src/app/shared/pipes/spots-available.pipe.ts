import { Pipe, PipeTransform } from '@angular/core';

import { Charter } from '../../models/Charter';

@Pipe({
  name: 'spotsAvailable'
})
export class SpotsAvailablePipe implements PipeTransform {

  transform(charter: Charter, getClass = false): string {
    const max = charter?.MaxGroupSize;
    const current = charter?.Members?.length;

    if (max > current) {
      return`${current}/${max} Spots Available`;
    } else {
      if (getClass) {
        return 'no-avail';
      } else {
        return `${current}/${max} No Spots Available`
      }
    }
  }

}
