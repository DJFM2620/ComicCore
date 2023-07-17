import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComicInfoRoutingModule } from './comic-info-routing.module';
import { ComicInfoComponent } from './pages/comic-info/comic-info.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ComicInfoComponent
  ],
  imports: [
    CommonModule,
    ComicInfoRoutingModule,
    SharedModule
  ]
})
export class ComicInfoModule { }
