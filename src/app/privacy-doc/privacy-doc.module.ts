import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivacyDocRoutingModule } from './privacy-doc-routing.module';
import { PrivacyDocComponent } from './privacy-doc.component';


@NgModule({
  declarations: [
    PrivacyDocComponent
  ],
  imports: [
    CommonModule,
    PrivacyDocRoutingModule
  ]
})
export class PrivacyDocModule { }
