import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comic } from '../data/comic';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  constructor(private readonly http: HttpClient) { }

  private readonly API = "https://joelcore.free.beeceptor.com/post";

  insertComic(comic: Comic): Observable<Comic> {

    const body:Comic = {
      id: comic.id + 1,
      name: comic.name,
      artist: comic.artist,
      last_cap: comic.last_cap,
      image: comic.image,
    };

    return this.http.post<Comic>(this.API, body);
  }

getComics(): Observable < Comic[] > {

  return this.http.get<Comic[]>(this.API);
}

updateComic(comic: Comic): Observable < void> {

  const body = {
    "id": comic.id,
    "name": comic.name,
    "artist": comic.artist,
    "last_cap": comic.last_cap,
    "image": comic.image,
  };

  return this.http.put<void>(`${this.API}/${comic.id}`, body);
}

deleteComic(id: number): Observable < void> {

  return this.http.delete<void>(`${this.API}/${id}`);
}

}
