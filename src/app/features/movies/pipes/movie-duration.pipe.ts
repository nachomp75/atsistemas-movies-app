import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieDuration',
})
export class MovieDurationPipe implements PipeTransform {
  transform(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const minutesLeft = minutes % 60;
    return `${hours && hours + 'h '}${minutesLeft && minutesLeft + 'm'}`;
  }
}
