import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http:HttpClient) { }

  getPublicPhotos() {
    return this.http.get('http://localhost:3000/photos/public')
  }

  searchPublicPhotos(searchString:string) {
    return this.http.post('http://localhost:3000/photos/search', {searchString})
  }
}
