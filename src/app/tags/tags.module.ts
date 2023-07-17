import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagsRoutingModule } from './tags-routing.module';
import { TagsComponent } from './pages/tags/tags.component';
import { ListTagComponent } from './components/list-tag/list-tag.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TagsComponent,
    ListTagComponent
  ],
  imports: [
    CommonModule,
    TagsRoutingModule,
    SharedModule
  ]
})
export class TagsModule { }
