import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoverPagePageRoutingModule } from './cover-page-routing.module';

import { CoverPagePage } from './cover-page.page';

import {SharedModule} from 'src/app/shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoverPagePageRoutingModule,
    SharedModule
  ],
  declarations: [CoverPagePage]
})
export class CoverPagePageModule {}
