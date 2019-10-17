import {ModuleWithProviders, NgModule, Type} from '@angular/core';

import {ITitleService} from '../../services/ITitleService';
import {SpecialTitleService} from '../../services/special-title.service';
import {TitleService} from '../../services/title.service';
import {FoodListComponent} from './food-list/food-list.component';

export interface OffersModuleConfig {
  titleService: Type<ITitleService>;
}

@NgModule({
  imports: [],
  exports: [FoodListComponent],
  declarations: [FoodListComponent],
  providers: [
    // {provide: ITitleService, useValue: TitleService },
    // SpecialTitleService,
  ],
})
export class FoodModule {
  static forRoot(config?: OffersModuleConfig): ModuleWithProviders {
    return {
      ngModule: FoodModule,
      providers: [
        {provide: TitleService, useClass: config && config.titleService || TitleService},
        SpecialTitleService,
      ],
    };
  }
}
