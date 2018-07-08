import { Component } from '@angular/core';
import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: 'rentals', loadChildren: 'src/app/features/rental/rental.module#RentalModule'
  },
  {
    path: '', redirectTo: 'rentals', pathMatch: 'full'
  },
  {
    path: '**', loadChildren: 'src/app/features/rental/rental.module#RentalModule'
  }
];
