import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { CardComicComponent } from './components/comic-card/comic-card.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    CardComicComponent,
    SectionTitleComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavigationComponent,
    FooterComponent,
    CardComicComponent,
    SectionTitleComponent,
    PaginationComponent,
  ]
})
export class SharedModule { }
