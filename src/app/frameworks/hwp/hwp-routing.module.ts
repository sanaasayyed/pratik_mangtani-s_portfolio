import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HwpPage } from './hwp.page';

const routes: Routes = [
  {
    path: '',
    component: HwpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HwpPageRoutingModule {}
