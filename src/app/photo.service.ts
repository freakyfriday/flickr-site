import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  serviceUrl = environment.serviceUrl;

  constructor(private http:HttpClient) { }

  getPublicPhotos() {
    return this.http.get(`${this.serviceUrl}/photos/public`)
  }

  searchPublicPhotos(searchString:string) {
    return this.http.post(`${this.serviceUrl}/photos/search`, {searchString})
  }
}
