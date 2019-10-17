import {NgModule} from '@angular/core';

import {CatsRoutingModule} from './cats-routing.module';
import {DashboardMainContainerComponent} from './dashboard/main/dashboard-main.container';
import {FoodModule} from '../modules/food/food.module';
import {FoodListContainerComponent} from './food/food-list/food-list.container';
import {FoodCreateContainerComponent} from './food/food-create/food-create.container';

@NgModule({
  imports: [
    CatsRoutingModule,
    FoodModule.forRoot(),
  ],
  exports: [],
  declarations: [
    FoodListContainerComponent,
    FoodCreateContainerComponent,
    DashboardMainContainerComponent,
  ],
  providers: [
    // {provide: TitleService, useValue: WhatService},
    // SpecialTitleService,
  ],
})
export class CatsModule {
}
