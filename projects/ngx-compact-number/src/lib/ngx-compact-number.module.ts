import { DecimalPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxCompactNumberPipe } from './ngx-compact-number.pipe';

@NgModule({
  imports: [],
  providers: [DecimalPipe],
  declarations: [NgxCompactNumberPipe],
  exports: [NgxCompactNumberPipe],
})
export class NgxCompactNumberModule { }
