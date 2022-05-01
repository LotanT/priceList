import { Component, Input, OnInit } from '@angular/core';
import { PriceList } from 'src/app/models/price.model';

@Component({
  selector: 'price-list-preview',
  templateUrl: './price-list-preview.component.html',
  styleUrls: ['./price-list-preview.component.scss']
})
export class PriceListPreviewComponent implements OnInit {

  @Input() priceList?: PriceList
  constructor() { }

  ngOnInit(): void {
  }

}
