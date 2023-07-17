import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTagComponent } from './components/list-tag/list-tag.component';
import { TagsComponent } from './pages/tags/tags.component';

const routes: Routes = [
  {
    path: '',
    component: TagsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagsRoutingModule { }
