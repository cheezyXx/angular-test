import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-offers-list-container',
  templateUrl: 'food-list.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoodListContainerComponent {
  // title = this.titleService.getTitle();
  // superTitle = this.specialTitleService.getSuperTitle();
  //
  // constructor(
  //   private specialTitleService: SpecialTitleService,
  //   private titleService: TitleService,
  // ) {
  // }
}
