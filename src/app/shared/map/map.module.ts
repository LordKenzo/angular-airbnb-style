import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgmCoreModule } from '@agm/core';
import { NgPipesModule } from 'ngx-pipes';

import { MapComponent } from './map.component';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA2IxSZFZicOKqcR7SnJ6PDIEjSgKj4yx4'
    }),
    NgPipesModule
  ],
  declarations: [
    MapComponent
  ],
  exports: [
    MapComponent
  ]
})
export class MapModule { }
