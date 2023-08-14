import { Routes } from '@angular/router';
import { HomeComponent, IncidenceListComponent } from 'src/features/home/';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    pathMatch: 'full',
    redirectTo: 'incidences',
  },
  {
    title: 'Incidences',
    path: 'incidences',
    component: HomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'on-course',
      },
      {
        path: 'on-course',
        component: IncidenceListComponent,
      },
      {
        path: 'resolved',
        component: IncidenceListComponent,
      },
    ],
  },
];
