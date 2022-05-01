import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PriceList } from 'src/app/models/price.model';
import { PriceListService } from 'src/app/services/price-list.service';

@Component({
  selector: 'details-edit',
  templateUrl: './details-edit.component.html',
  styleUrls: ['./details-edit.component.scss']
})
export class DetailsEditComponent implements OnInit, OnDestroy {

  priceList?: PriceList
  priceListName: string = ''
  extErpPriceListID: number = 0
  errNameMsg: string = ''
  errErpMsg: string = ''
  priceLists: PriceList[] = []
  subscription?: Subscription

  constructor(private priceListService: PriceListService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      const {id} = params
      this.priceList = this.priceListService.getById(id)
      if(this.priceList) this.priceListName = this.priceList.priceListName
      if(this.priceList?.extErpPriceListID) this.extErpPriceListID = this.priceList.extErpPriceListID
    })
    this.subscription = this.priceListService.priceList$.subscribe(priceLists=>{
      this.priceLists = priceLists
    })
  }

  onSave(){
    if(this.priceListName.length<10){
      this.setErrNameMsg('The name need to be at least 10 chars')
      return
    }
    if(!this.priceListName.match(/^[A-Za-z]+$/)){
      this.setErrNameMsg('Name can\'t contain digits!')
      return
    }
    this.setErrNameMsg('')
    const isExist = this.priceLists.every(priceList=>{
      return priceList.extErpPriceListID !== this.extErpPriceListID
    })
    if(!isExist){
      this.setErrErpMsg('Already exist, choose another.')
      return
    }
    if(this.priceList){
      this.priceList.extErpPriceListID = this.extErpPriceListID
      this.priceList.priceListName = this.priceListName
      this.priceListService.save(this.priceList)
      this.router.navigateByUrl('')
    }
  }

  setErrNameMsg(msg: string){
    this.errNameMsg = msg
  }

  setErrErpMsg(msg: string){
    this.errErpMsg = msg
  }

  goBack(){
    this.router.navigateByUrl('')
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
