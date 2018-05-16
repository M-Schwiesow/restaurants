import { Restaurant } from './../restaurant';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rest-detail',
  templateUrl: './rest-detail.component.html',
  styleUrls: ['./rest-detail.component.css']
})
export class RestDetailComponent implements OnInit {
  restaurant: Restaurant;

  constructor(private restService: RestService, private _router: Router, private _aRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getRest();
  }

  getRest(){
    this._aRoute.params.subscribe((params: Params)=>{
      this.restService.getRestById(params['id']).subscribe(rest => this.restaurant = rest as Restaurant);
    })
  }

  goToWrite(id: String){
    this._router.navigate(['write', id]);
  }

  goHome(){
    this._router.navigate(['']);
    this.restaurant = new Restaurant;
  }
}
