import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PriceList } from 'src/app/models/price.model';
import { PriceListService } from 'src/app/services/price-list.service';

@Component({
  selector: 'price-list-app',
  templateUrl: './price-list-app.component.html',
  styleUrls: ['./price-list-app.component.scss']
})
export class PriceListAppComponent implements OnInit {

  constructor(private priceListService:PriceListService ) { }

  priceList$?: Observable<PriceList[]>

  ngOnInit(): void {
    this.priceListService.GetPriceLists()
    this.priceList$ = this.priceListService.priceList$
  }

}
