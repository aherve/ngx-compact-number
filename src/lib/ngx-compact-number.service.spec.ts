import { TestBed, inject } from '@angular/core/testing';

import { NgxCompactNumberService } from './ngx-compact-number.service';
import { DecimalPipe } from '@angular/common';

describe('NgxCompactNumberService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NgxCompactNumberService,
        DecimalPipe,
      ]
    });
  });

  it('should be created', inject([NgxCompactNumberService], (service: NgxCompactNumberService) => {
    expect(service).toBeTruthy();
  }));

  it('should print numbers with proper prefixes', inject([NgxCompactNumberService], (service: NgxCompactNumberService) => {
    expect(service.format(0.001)).toEqual('0')
    expect(service.format(1)).toEqual('1')
    expect(service.format(1.3)).toEqual('1.3')
    expect(service.format(1.3, 1)).toEqual('1.3')
    expect(service.format(1.3, 2)).toEqual('1.3')
    expect(service.format(100)).toEqual('100')
    expect(service.format(999)).toEqual('999')
    expect(service.format(1000)).toEqual('1k')
    expect(service.format(1001)).toEqual('1k')
    expect(service.format(1001.001)).toEqual('1k')
    expect(service.format(1500)).toEqual('1.5k')
    expect(service.format(1567)).toEqual('1.57k')
    expect(service.format(10000)).toEqual('10k')
    expect(service.format(15000)).toEqual('15k')
    expect(service.format(100000)).toEqual('100k')
    expect(service.format(1000000)).toEqual('1M')
    expect(service.format(1234567, 1)).toEqual('1.2M')
    expect(service.format(1234567)).toEqual('1.23M')
    expect(service.format(1234567, 2)).toEqual('1.23M')
    expect(service.format(1299999, 1)).toEqual('1.3M')
    expect(service.format(-1234567, 2)).toEqual('-1.23M')
  }))
});
