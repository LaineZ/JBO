import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermsOfUseDocComponent } from './terms-of-use-doc.component';

const routes: Routes = [{ path: '', component: TermsOfUseDocComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermsOfUseDocRoutingModule { }
