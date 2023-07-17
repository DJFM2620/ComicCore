import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturedRoutingModule } from './featured-routing.module';
import { FeaturedComponent } from './pages/featured/featured.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FeaturedComponent
  ],
  imports: [
    CommonModule,
    FeaturedRoutingModule,
    SharedModule
  ]
})
export class FeaturedModule { }
