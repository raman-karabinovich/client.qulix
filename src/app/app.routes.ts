import {Routes} from '@angular/router';
import {HomeComponent} from './home';
import {PerformerComponent} from './performers';
import {TaskComponent} from './tasks';
import {NoContentComponent} from './no-content';

export const ROUTES: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  {path: 'tasks', component: TaskComponent},
  {path: 'performers', component: PerformerComponent},
  {path: '**', component: NoContentComponent},
];
