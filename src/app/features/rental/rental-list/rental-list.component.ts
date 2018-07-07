import { Component, OnInit, Input } from '@angular/core';
import { Rental } from '../shared/rental.model';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {

  @Input() rentals: Rental[];

  constructor() { }

  ngOnInit() {
  }

}
