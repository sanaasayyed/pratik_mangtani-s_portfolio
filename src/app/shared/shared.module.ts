import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';

import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SideNavAComponent } from './side-nav-a/side-nav-a.component';
import { SideNavBComponent } from './side-nav-b/side-nav-b.component';
import { SideNavCComponent } from './side-nav-c/side-nav-c.component';
import { SideNavDComponent } from './side-nav-d/side-nav-d.component';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';


@NgModule({
  declarations: [
    TopNavComponent,
    SideNavComponent,
    SideNavAComponent,
    SideNavBComponent,
    SideNavCComponent,
    SideNavDComponent,
    BottomNavComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports: [
    TopNavComponent,
    SideNavComponent,
    SideNavAComponent,
    SideNavBComponent,
    SideNavCComponent,
    SideNavDComponent,
    BottomNavComponent
  ]
})
export class SharedModule { }
