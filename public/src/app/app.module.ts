import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RestListComponent } from './rest-list/rest-list.component';
import { RestDetailComponent } from './rest-detail/rest-detail.component';
import { RestEditComponent } from './rest-edit/rest-edit.component';
import { RestNewComponent } from './rest-new/rest-new.component';
import { RestReviewNewComponent } from './rest-review-new/rest-review-new.component';
import { RestService } from './rest.service';


@NgModule({
  declarations: [
    AppComponent,
    RestListComponent,
    RestDetailComponent,
    RestEditComponent,
    RestNewComponent,
    RestReviewNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
