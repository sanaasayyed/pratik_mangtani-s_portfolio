import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreativePageRoutingModule } from './creative-routing.module';

import { CreativePage } from './creative.page';

import {SharedModule} from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreativePageRoutingModule,
    SharedModule
  ],
  declarations: [CreativePage]
})
export class CreativePageModule {}
