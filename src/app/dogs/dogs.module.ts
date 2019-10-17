import {NgModule} from '@angular/core';

import {DogsRoutingModule} from './dogs-routing.module';
import {DashboardMainContainerComponent} from './dashboard/main/dashboard-main.container';
import {FoodModule} from '../modules/food/food.module';
import {BetterTitleService} from './food/services/better-title.service';
import {FoodListContainerComponent} from './food/food-list/food-list.container';

@NgModule({
  imports: [
    DogsRoutingModule,
    FoodModule.forRoot({titleService: BetterTitleService}),
  ],
  exports: [],
  declarations: [
    FoodListContainerComponent,
    DashboardMainContainerComponent,
  ],
  providers: [
    // { provide: TitleService, useClass: BetterTitleService },
    // SpecialTitleService,
  ],
})
export class DogsModule {
}
