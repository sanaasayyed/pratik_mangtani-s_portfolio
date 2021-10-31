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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrameworksRoutingModule { }
