import {RouterModule, Routes} from '@angular/router';
import {Q1Component} from './q1/q1.component';
import {Q2Component} from './q2/q2.component';
import {Q3Component} from './q3/q3.component';

const AP_ROUTES: Routes = [
  {
    path: 'q1',
    component: Q1Component,
    data: {title: 'Challenge - Q1'}
  },
  {
    path: 'q2',
    component: Q2Component,
    data: {title: 'Challenge - Q2'}
  },
  {
    path: 'q3',
    component: Q3Component,
    data: {title: 'Challenge - Q3'}
  }
];

/*, {useHash: true}*/
export const AppRouting = RouterModule.forRoot(AP_ROUTES);
