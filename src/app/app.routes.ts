import { Component } from '@angular/core';
import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: '', loadChildren: 'src/app/features/rental/rental.module#RentalModule'
  },
];
