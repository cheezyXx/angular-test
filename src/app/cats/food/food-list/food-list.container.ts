import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-offers-list-container',
  templateUrl: 'food-list.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoodListContainerComponent implements OnInit {

  ngOnInit(): void {
    this.someOtherLogic();
  }

  someOtherLogic() {
    console.log('Some other logic');
  }
}
