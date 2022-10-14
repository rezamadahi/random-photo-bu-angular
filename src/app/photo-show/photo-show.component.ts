import { Component, OnInit } from '@angular/core';
import {PhotosService} from "../photos.service";
import {UnsplashResponse} from "../unsplash-response.model";

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent implements OnInit {

  randomPhoto!: UnsplashResponse;

  constructor(private photoService: PhotosService) { }

  ngOnInit(): void {
  }

  getRandomPhoto() {
    this.photoService.getRandomPhoto().subscribe({
      next: (response) => {
        console.log(response);
        this.randomPhoto = response;
      },
      error: err => {
        console.log(err);
      }
    });
  }

}
