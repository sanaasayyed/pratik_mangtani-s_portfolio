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
  {
    path: 'creative',
    loadChildren: () => import('./creative/creative.module').then( m => m.CreativePageModule)
  },
  {
    path: 'voronav',
    loadChildren: () => import('./voronav/voronav.module').then( m => m.VoronavPageModule)
  },
  {
    path: 'beyond-barcode',
    loadChildren: () => import('./beyond-barcode/beyond-barcode.module').then( m => m.BeyondBarcodePageModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrameworksRoutingModule { }
