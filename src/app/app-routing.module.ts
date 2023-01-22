import { ProviderTemplateComponent } from './pages/provider-tamplate/provider-tamplate.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'gapsi/home',
    pathMatch: 'full',
  },
  {
    path: 'gapsi',
    redirectTo: 'gapsi/home',
    pathMatch: 'full',
  },
  {
    path: 'gapsi',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },

      {
        path: 'providers',
        component: ProviderTemplateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
