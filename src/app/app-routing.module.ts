import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PhotoShowComponent} from "./photo-show/photo-show.component";

const routes: Routes = [
  { path: '', component: PhotoShowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
