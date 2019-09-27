import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AbasPage } from './abas.page';
import { Aba1Component } from '../aba1/aba1.component';
import { Aba2Component } from '../aba2/aba2.component';
import { Aba3Component } from '../aba3/aba3.component';

const routes: Routes = [
  {
    path: 'abas',
    redirectTo: '/aba1',
    component: AbasPage,
    children: [
     
      {
        path: 'aba1',      
        component: Aba1Component
      },
      {
        path: 'aba2',
        component: Aba2Component
      },
      {
        path: 'aba3',
        component: Aba3Component
      }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AbasPage]
})
export class AbasPageModule {}
