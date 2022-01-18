import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeyondBarcodePage } from './beyond-barcode.page';

const routes: Routes = [
  {
    path: '',
    component: BeyondBarcodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeyondBarcodePageRoutingModule {}
