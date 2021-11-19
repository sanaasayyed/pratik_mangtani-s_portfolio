import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./cover-page/cover-page.module').then( m => m.CoverPagePageModule)
  },
  {
    path: 'cover-page',
    loadChildren: () => import('./cover-page/cover-page.module').then( m => m.CoverPagePageModule)
  },
  {
    path: 'hwp',
    loadChildren: () => import('./hwp/hwp.module').then( m => m.HwpPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrameworksRoutingModule { }
