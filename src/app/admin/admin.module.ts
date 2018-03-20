import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    AdminRoutingModule,
  ],
  declarations: [EditArticleComponent, HomeComponent]
})
export class AdminModule { }
