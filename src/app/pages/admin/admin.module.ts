import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { NgZorroAntdModule, NZ_I18N, fa_IR } from 'ng-zorro-antd';
import { AdminComponent } from './admin.component';


@NgModule({
  imports: [AdminRoutingModule , NgZorroAntdModule],
  declarations: [AdminComponent],
  providers: [{ provide: NZ_I18N, useValue: fa_IR }],
  exports: [AdminComponent]
})
export class AdminModule { }
