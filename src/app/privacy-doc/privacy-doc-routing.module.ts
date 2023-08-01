import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyDocComponent } from './privacy-doc.component';

const routes: Routes = [{ path: '', component: PrivacyDocComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivacyDocRoutingModule { }
