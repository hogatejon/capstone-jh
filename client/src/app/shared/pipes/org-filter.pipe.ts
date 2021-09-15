import { Pipe, PipeTransform } from '@angular/core';
import { Charter } from 'src/app/models/Charter';

@Pipe({
  name: 'orgFilter'
})
export class OrgFilterPipe implements PipeTransform {

  transform(charters: Charter[], orgName: string): Charter[] {
    if (orgName === '') {
      return charters;
    }
    return charters?.filter((charter) => {
      return charter.OrganizationName === orgName;
    });
  }

}
