import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistsRoutingModule } from './artists-routing.module';
import { ArtistsComponent } from './pages/artists/artists.component';
import { SharedModule } from '../shared/shared.module';
import { ArtistCardComponent } from './components/artist-card/artist-card.component';


@NgModule({
  declarations: [
    ArtistsComponent,
    ArtistCardComponent
  ],
  imports: [
    CommonModule,
    ArtistsRoutingModule,
    SharedModule
  ]
})
export class ArtistsModule { }
