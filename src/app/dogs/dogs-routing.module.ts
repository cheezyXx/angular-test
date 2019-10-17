import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {DashboardMainContainerComponent} from './dashboard/main/dashboard-main.container';
import {FoodListContainerComponent} from './food/food-list/food-list.container';

const routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    component: DashboardMainContainerComponent,
  },
  {
    path: 'food',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
      },
      {
        path: 'list',
        component: FoodListContainerComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class DogsRoutingModule {
}
