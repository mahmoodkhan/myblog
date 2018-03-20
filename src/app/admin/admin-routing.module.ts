import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditArticleComponent } from './edit-article/edit-article.component';
import { HomeComponent } from './home/home.component';

const adminRoutes: Routes = [
  { path: 'admin', component: HomeComponent, children: [
    { path: 'edit', component: EditArticleComponent },
  ] },
];
@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes),
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule {

}
