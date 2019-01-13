import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

var api_uri = "http://http://localhost:3000/"; //https://flickr-api.azurewebsites.net

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http:HttpClient) { }

  getPublicPhotos() {
    return this.http.get(`${api_uri}/photos/public`)
  }

  searchPublicPhotos(searchString:string) {
    return this.http.post(`${api_uri}/photos/search`, {searchString})
  }
}
