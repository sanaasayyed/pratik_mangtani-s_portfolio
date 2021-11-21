import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoronavPage } from './voronav.page';

const routes: Routes = [
  {
    path: '',
    component: VoronavPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoronavPageRoutingModule {}
