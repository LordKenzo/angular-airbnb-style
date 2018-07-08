import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { RouterModule } from '../../../node_modules/@angular/router';

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [HeaderComponentComponent],
  exports: [
    HeaderComponentComponent
  ]
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  /*public static forRoot() {
    console.log('forRoot');
    return {
      ngModule: CoreModule,
      providers: [CacheService]
    };
  }*/
 }
