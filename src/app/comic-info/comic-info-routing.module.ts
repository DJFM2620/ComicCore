import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicInfoComponent } from './pages/comic-info/comic-info.component';

const routes: Routes = [
  {
    path: '',
    component: ComicInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicInfoRoutingModule { }
