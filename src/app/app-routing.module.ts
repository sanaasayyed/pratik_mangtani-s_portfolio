import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
  {
    path: '',
    loadChildren: () => import('./frameworks/frameworks.module').then( m => m.FrameworksModule)
  },      
  {
    path: 'frameworks',
    loadChildren: () => import('./frameworks/frameworks.module').then( m => m.FrameworksModule)
  },  
  {
    path: 'shared',
    loadChildren: () => import('./shared/shared.module').then( m => m.SharedModule)
  },     
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy', scrollPositionRestoration: 'top'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


