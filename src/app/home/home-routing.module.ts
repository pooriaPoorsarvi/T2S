import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'examples',
        loadChildren: () => import('./examples/examples.module').then( m => m.ExamplesPageModule)
      },
      {
        path: 'detail',
        loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'tabs/examples'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
