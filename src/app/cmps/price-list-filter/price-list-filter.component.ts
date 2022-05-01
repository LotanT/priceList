import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { PriceListFilter } from 'src/app/models/price-list-filter';
import { PriceListService } from 'src/app/services/price-list.service';

@Component({
  selector: 'price-list-filter',
  templateUrl: './price-list-filter.component.html',
  styleUrls: ['./price-list-filter.component.scss']
})
export class PriceListFilterComponent implements OnInit, OnDestroy {

  constructor(private priceListService: PriceListService) { }

  filterBy: PriceListFilter = {term: ''}
  subscription?: Subscription

  ngOnInit(): void {
    this.subscription = this.priceListService.filterBy$.subscribe(filterBy=>{
      this.filterBy = filterBy
    })
  }

  setFilterBy(){
    this.priceListService.setFilterBy(this.filterBy)
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
