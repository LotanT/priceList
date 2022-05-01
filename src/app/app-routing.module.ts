import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsEditComponent } from './pages/details-edit/details-edit.component';
import { PriceListAppComponent } from './pages/price-list-app/price-list-app.component';

const routes: Routes = [
  {path: '', component: PriceListAppComponent, children: [
    {path: ':id', component: DetailsEditComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
