import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

// Este es el router hijo, los que nos redireccionara al path hijo del padre, es decir, /home/hijo.

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
