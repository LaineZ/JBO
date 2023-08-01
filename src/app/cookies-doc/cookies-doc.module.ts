import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CookiesDocRoutingModule } from './cookies-doc-routing.module';
import { CookiesDocComponent } from './cookies-doc.component';


@NgModule({
  declarations: [
    CookiesDocComponent
  ],
  imports: [
    CommonModule,
    CookiesDocRoutingModule
  ]
})
export class CookiesDocModule { }
