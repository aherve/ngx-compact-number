import { Pipe, PipeTransform } from '@angular/core';
import { NgxCompactNumberService } from './ngx-compact-number.service';

@Pipe({name: 'compactNumber'})
export class NgxCompactNumberPipe implements PipeTransform {

  constructor(private compactNumberService: NgxCompactNumberService) { }

  public transform(value: number, decimals?: number, locale?: string) {
    return this.compactNumberService.format(value, decimals, locale);
  }
}
