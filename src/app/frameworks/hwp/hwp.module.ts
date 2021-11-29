import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HwpPageRoutingModule } from './hwp-routing.module';

import { HwpPage } from './hwp.page';

import {SharedModule} from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HwpPageRoutingModule,
    SharedModule
  ],
  declarations: [HwpPage]
})
export class HwpPageModule {}
