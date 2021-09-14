import { Pipe, PipeTransform } from '@angular/core';
import { Charter } from '../models/Charter';

@Pipe({
  name: 'charterSearch'
})
export class CharterSearchPipe implements PipeTransform {

  transform(charters: Charter[], searchValue: string): Charter[] {
    const searchText = searchValue?.toLowerCase();
    if (searchText === '') {
      return charters;
    }
    const filteredCharters = charters?.filter(charter => {
      return charter.GroupName.toLowerCase().indexOf(searchText) !== -1 ||
             charter.OrganizationName.toLowerCase().indexOf(searchText) !== -1 ||
             charter.SponsorName.toLowerCase().indexOf(searchText) !== -1 ||
             charter.SponsorPhone.indexOf(searchText) !== -1 ||
             charter.SponsorEmail.toLowerCase().indexOf(searchText) !== -1;
    });
    console.log(filteredCharters);
    return filteredCharters;
  }
}
