import { Injectable } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class NgxCompactNumberService {

  constructor(private decimalPipe: DecimalPipe) {}

  public format(n: number, numberOfDecimals: number = 2, locale?: string): string {
    /*
     *https://en.wikipedia.org/wiki/Metric_prefix
     */
    const suffixes = ['', 'k', 'M', 'G', 'T', 'P', 'E']

    // TODO: could be intersting to take minus powers into account (nano, micro...etc)
    const suffixIndex = Math.max(0,
      Math.min(
        suffixes.length - 1,
        Math.floor(
          Math.log10(Math.abs(n)) / 3
        )
      )
    )

    const newValue = n / Math.pow(10, 3 * suffixIndex)
    const truncated = Math.round( newValue * Math.pow(10, numberOfDecimals) ) / Math.pow(10, numberOfDecimals)

    return this.decimalPipe.transform( truncated, null, locale ) + suffixes[suffixIndex]
  }
}
