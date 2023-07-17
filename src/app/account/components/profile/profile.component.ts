import { Component } from '@angular/core';
import { Comic } from 'src/app/data/comic';
import { ComicsService } from 'src/app/services/comics.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(private comicService: ComicsService){}

  newComic: Comic = {

    id: 0,
    name: '',
    artist: '',
    last_cap: '',
    image: ''
  };

  comics: Comic[] = [];

  addComic(){

    this.comicService.insertComic(this.newComic).subscribe( responseComic => {

      this.comics.push(responseComic);

      console.log("Cargado");
      console.log(this.comics);
    });

    /*this.comicService.getComics().subscribe( responseComic => {

      console.log("Resultado cargado");
    })*/
  }
}
