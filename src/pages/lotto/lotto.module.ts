import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LottoPage } from './lotto';

@NgModule({
  declarations: [
    LottoPage,
  ],
  imports: [
    IonicPageModule.forChild(LottoPage),
  ],
  exports: [
    LottoPage
  ]
})
export class LottoPageModule {}
