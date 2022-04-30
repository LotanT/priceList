import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PriceList } from '../models/price.model';

@Injectable({
  providedIn: 'root'
})
export class PriceListService {

  constructor() { }

  private _priceListDB: PriceList[] = [
    {priceListID: 11, priceListName: 'books', extErpPriceListID: null},
    {priceListID: 12, priceListName: 'toys', extErpPriceListID: null},
    {priceListID: 13, priceListName: 'cars', extErpPriceListID: null},
    {priceListID: 14, priceListName: 'candys', extErpPriceListID: null},
    {priceListID: 15, priceListName: 'cards', extErpPriceListID: null},
    {priceListID: 16, priceListName: 'phones', extErpPriceListID: null},
    {priceListID: 17, priceListName: 'shoes', extErpPriceListID: null},
  ]

  private _priceList$ = new BehaviorSubject<PriceList[]>([]);
  public priceList$ = this._priceList$.asObservable();

  public GetPriceLists (){
    this._priceList$.next(this._priceListDB)
  }

}
