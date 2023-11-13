import { Routes } from '@angular/router';
import { BugCreationComponent } from './bug-creation/bug-creation.component';
import { BugOverviewComponent } from './bug-overview/bug-overview.component';

export const routes: Routes = [
  { path: 'overview-bugs', component: BugOverviewComponent },
  {
    path: 'create-edit-bug', component: BugCreationComponent
    // loadComponent: () =>
    //   import('./bug-creation/bug-creation.component').then(
    //     (c) => c.BugCreationComponent
    //   ),
  },
];
