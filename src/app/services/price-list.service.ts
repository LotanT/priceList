import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { PriceListFilter } from '../models/price-list-filter';
import { PriceList } from '../models/price.model';

@Injectable({
  providedIn: 'root'
})
export class PriceListService {

  constructor() { }

  private _priceListDB: PriceList[] = [
    { priceListID: 11, priceListName: 'books', extErpPriceListID: null },
    { priceListID: 12, priceListName: 'toys', extErpPriceListID: null },
    { priceListID: 13, priceListName: 'cars', extErpPriceListID: null },
    { priceListID: 14, priceListName: 'candys', extErpPriceListID: null },
    { priceListID: 15, priceListName: 'cards', extErpPriceListID: null },
    { priceListID: 16, priceListName: 'phones', extErpPriceListID: null },
  ]

  private _priceList$ = new BehaviorSubject<PriceList[]>([]);
  public priceList$ = this._priceList$.asObservable();

  private _filterBy$ = new BehaviorSubject<PriceListFilter>({ term: '' })
  public filterBy$ = this._filterBy$.asObservable()

  public GetPriceLists() {
    const filter = this._filterBy$.getValue()
    const priceList = this._priceListDB.filter(priceList => {
      return priceList.priceListName.toLocaleLowerCase().includes(filter.term.toLocaleLowerCase())
    })
    this._priceList$.next(priceList)
  }

  public setFilterBy(filterBy: PriceListFilter) {
    this._filterBy$.next(filterBy)
    this.GetPriceLists()
  }

  public getById(id: string) {
    const priceList = this._priceListDB.find(priceList => priceList.priceListID === +id)
    return priceList
  }

  public save(priceListToUpdate: PriceList) {
    const idx = this._priceListDB.findIndex(priceList =>
      priceList.priceListID === priceListToUpdate.priceListID)
    this._priceListDB.splice(idx, 1, priceListToUpdate)
  }
}
