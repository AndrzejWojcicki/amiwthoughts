import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateChanger'
})
export class DateChangerPipe implements PipeTransform {

  transform(momentDates) {
    const momentDate = moment(momentDates);
    const momentNow = moment.now();
    if (momentDate.diff(momentNow, 'days') > -4) {
      return momentDate.calendar();
    } else {
      return momentDate.format('MMMM Do YYYY, h:mm:ss');
    }
  }

}
