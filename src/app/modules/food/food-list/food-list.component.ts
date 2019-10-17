import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SpecialTitleService} from '../../../services/special-title.service';
import {TitleService} from '../../../services/title.service';

@Component({
  selector: 'app-offers-list',
  templateUrl: 'food-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoodListComponent {
  title = '';
  superTitle = '';
  somethingCool = '';

  constructor(
    private specialTitleService: SpecialTitleService,
    private titleService: TitleService,
  ) {
    this.title = this.titleService.getTitle();
    this.superTitle = this.specialTitleService.getSuperTitle();
    this.somethingCool = this.titleService.somethingVeryCool();
  }
}
