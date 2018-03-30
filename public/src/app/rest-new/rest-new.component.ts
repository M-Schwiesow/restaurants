import { Restaurant } from './../restaurant';
import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rest-new',
  templateUrl: './rest-new.component.html',
  styleUrls: ['./rest-new.component.css']
})
export class RestNewComponent implements OnInit {
  restaurant: Restaurant;
  errors: any = [];

  constructor(private restService: RestService, private _router: Router) { }

  ngOnInit() {
    this.restaurant = new Restaurant;
  }

  goHome(){
    this._router.navigate(['']);
    this.restaurant = new Restaurant;
  }

  newRest(){
    this.restService.newRest(this.restaurant).subscribe((response)=>{
      console.log(response);
      if(response['message'] === 'error'){
        console.log(response);
        this.errors = response['errors'];
        console.log("this.errors after set", this.errors);
      } else {
      this.restaurant = new Restaurant;
      this._router.navigate(['']);
      }
    })
  }

}
