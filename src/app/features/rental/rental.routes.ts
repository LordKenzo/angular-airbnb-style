import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { Routes } from '@angular/router';

import { RentalComponent } from './rental.component';

export const RentalRoutes: Routes = [
  {
    path: '', component: RentalComponent
  },
  {
    path: ':id', component: RentalDetailComponent
  }
];
