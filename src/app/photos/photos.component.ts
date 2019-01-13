import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';
import _ from 'lodash';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  //declare photos
  searchString$: string;
  photos$: object;

  constructor(private data:PhotoService) { }

  ngOnInit() {

    this.getPublicPhotos();

  }

  getPublicPhotos() {
    //subscribe to public photos results
    this.data.getPublicPhotos().subscribe(
      (data: any)=> {
        this.photos$ = (data && data.items) ? data.items : [];
      },
      error => { // error path
        //alert user to error
      }
    )
  }

  searchPublicPhotos() {
    //subscribe to photo search results
    if (!_.isEmpty(this.searchString$)){
      this.data.searchPublicPhotos(this.searchString$).subscribe(
        (data: any)=> {
          this.photos$ = (data && data.items) ? data.items : [];
        },
        error => { // error path
          //alert user to error
        }
      )
    }else{
        this.getPublicPhotos();
    }
  }

}
