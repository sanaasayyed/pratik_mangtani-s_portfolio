import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoronavPageRoutingModule } from './voronav-routing.module';

import { VoronavPage } from './voronav.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoronavPageRoutingModule
  ],
  declarations: [VoronavPage]
})
export class VoronavPageModule {}
