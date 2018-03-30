import { RestDetailComponent } from './rest-detail/rest-detail.component';
import { RestNewComponent } from './rest-new/rest-new.component';
import { RestListComponent } from './rest-list/rest-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestReviewNewComponent } from './rest-review-new/rest-review-new.component';

const routes: Routes = [
  {path: '', component: RestListComponent},
  {path: 'new', component: RestNewComponent},
  {path: 'reviews/:id', component: RestDetailComponent},
  {path: 'write/:id', component: RestReviewNewComponent}
  //Do we need a path for a sub-component?  I don't know, we'll find out!
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
