import { Restaurant } from './../restaurant';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Review } from './../review';
import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rest-review-new',
  templateUrl: './rest-review-new.component.html',
  styleUrls: ['./rest-review-new.component.css']
})
export class RestReviewNewComponent implements OnInit {
  review: Review;
  rest_id: String;
  restaurant: Restaurant;
  errors: any = [];

  constructor(private restService: RestService, private _aRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.restaurant = new Restaurant;
    this.review = new Review;
    this.getRest();
  }

  goBack(){
    this._aRoute.params.subscribe((params: Params)=>{
      this._router.navigate(['reviews', params['id']]);
    })

  }

  getRest(){
    this._aRoute.params.subscribe((params: Params)=>{
      this.restService.getRestById(params['id']).subscribe(rest => this.restaurant = rest as Restaurant);
    })
  }

  newReview(){
    this._aRoute.params.subscribe((params: Params)=>{
      this.restService.addReview(params['id'], this.review).subscribe((response)=>{
        console.log(response);
        if(response['message'] === 'error'){
          console.log(response);
          this.errors = response['errors'];
          console.log("this.errors after set", this.errors);
        } else {
        this._router.navigate(['reviews', params['id']]);
        }
      })
    })
  }

  goHome(){
    this._router.navigate(['']);
    this.restaurant = new Restaurant;
  }

}
