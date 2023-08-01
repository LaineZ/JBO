import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CookiesDocComponent } from './cookies-doc.component';

const routes: Routes = [{ path: '', component: CookiesDocComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CookiesDocRoutingModule { }
