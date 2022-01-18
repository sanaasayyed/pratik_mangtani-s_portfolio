import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeyondBarcodePageRoutingModule } from './beyond-barcode-routing.module';

import { BeyondBarcodePage } from './beyond-barcode.page';

import {SharedModule} from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeyondBarcodePageRoutingModule,
    SharedModule
  ],
  declarations: [BeyondBarcodePage]
})
export class BeyondBarcodePageModule {}
