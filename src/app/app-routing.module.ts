import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  // { path: '', redirectTo: '/admin', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
  { path: 'home', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
