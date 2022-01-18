import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SideNavAComponent } from './side-nav-a/side-nav-a.component';
import { SideNavBComponent } from './side-nav-b/side-nav-b.component';
import { SideNavCComponent } from './side-nav-c/side-nav-c.component';
import { SideNavDComponent } from './side-nav-d/side-nav-d.component';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';

const routes: Routes = [
  {
    path: 'top-nav',
    component: TopNavComponent
  }, 
  {
    path: 'side-nav',
    component: SideNavComponent
  }, 
  {
    path: 'side-nav-a',
    component: SideNavAComponent
  }, 
  {
    path: 'side-nav-b',
    component: SideNavBComponent
  }, 
  {
    path: 'side-nav-c',
    component: SideNavCComponent
  },
  {
    path: 'side-nav-d',
    component: SideNavDComponent
  },
  {
    path: 'bottom-nav',
    component: BottomNavComponent
  },     
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
