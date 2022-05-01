import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PriceListAppComponent } from './pages/price-list-app/price-list-app.component';
import { PriceListListComponent } from './cmps/price-list-list/price-list-list.component';
import { PriceListPreviewComponent } from './cmps/price-list-preview/price-list-preview.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PriceListAppComponent,
    PriceListListComponent,
    PriceListPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
