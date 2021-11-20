import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HwpPageRoutingModule } from './hwp-routing.module';

import { HwpPage } from './hwp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HwpPageRoutingModule
  ],
  declarations: [HwpPage]
})
export class HwpPageModule {}
