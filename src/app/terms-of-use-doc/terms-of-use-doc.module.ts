import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsOfUseDocRoutingModule } from './terms-of-use-doc-routing.module';
import { TermsOfUseDocComponent } from './terms-of-use-doc.component';


@NgModule({
  declarations: [
    TermsOfUseDocComponent
  ],
  imports: [
    CommonModule,
    TermsOfUseDocRoutingModule
  ]
})
export class TermsOfUseDocModule { }
