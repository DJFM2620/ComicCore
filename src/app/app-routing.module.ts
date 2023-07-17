import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { // Usaremos la carga lazy o perezosa para poder cargar solo lo que se va a ver y no todos los componentes
    path: '', // Cuando se este en este Path se importara el siguiente modulo
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'Featured',
    loadChildren: () => import('./featured/featured.module').then(m => m.FeaturedModule)
  },
  {
    path: 'Updates',
    loadChildren: () => import('./update/update.module').then(m => m.UpdateModule)
  },
  {
    path: 'Tags',
    loadChildren: () => import('./tags/tags.module').then(m => m.TagsModule)
  },
  {
    path: 'Artists',
    loadChildren: () => import('./artists/artists.module').then(m => m.ArtistsModule)
  },
  {
    path: 'Account',
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'Comic-Info',
    loadChildren: () => import('./comic-info/comic-info.module').then(m => m.ComicInfoModule)
  },
  {
    path: 'Reports-Feedback',
    loadChildren: () => import('./report-feedback/report-feedback.module').then(m => m.ReportFeedbackModule)
  }
  
];

// Este es el router principal, el que nos direccionara a los demas paths

@NgModule({
  imports: [
    CommonModule, // Módulo de Angular que proporciona las directivas y tuberías comunes, como ngIf, ngFor, UpperCasePipe
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
