import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {UnsplashResponse} from "./unsplash-response.model";

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  baseUrlRandomPhoto = `${environment.url}photos/random?client_id=qx5FmeUoOW6o94YzWwHtXt-tBzwrcaEwvKIPevQCcrM`;

  constructor(private httpClient: HttpClient) {}

  getRandomPhoto() {
    return this.httpClient.get<UnsplashResponse>(this.baseUrlRandomPhoto);
  }

}
