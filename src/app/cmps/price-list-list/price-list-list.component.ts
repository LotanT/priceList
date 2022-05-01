import { Component, Input, OnInit } from '@angular/core';
import { PriceList } from 'src/app/models/price.model';

@Component({
  selector: 'price-list-list',
  templateUrl: './price-list-list.component.html',
  styleUrls: ['./price-list-list.component.scss']
})
export class PriceListListComponent implements OnInit {

  @Input() priceLists?: PriceList[]|null

  constructor() { }

  ngOnInit(): void {
  }

}
