import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Aba1Component } from './aba1/aba1.component';
import { Aba2Component } from './aba2/aba2.component';
import { Aba3Component } from './aba3/aba3.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'detalhes/:id', loadChildren: './detalhes/detalhes.module#DetalhesPageModule' },
  {
    path: 'abas', loadChildren: './abas/abas.module#AbasPageModule',
    
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
