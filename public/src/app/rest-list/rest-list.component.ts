import { Router } from '@angular/router';
import { RestService } from './../rest.service';
import { Restaurant } from './../restaurant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rest-list',
  templateUrl: './rest-list.component.html',
  styleUrls: ['./rest-list.component.css']
})
export class RestListComponent implements OnInit {
  rests: Restaurant[];
  now: any;
  editClicked: Boolean;
  passed_Id: String;

  constructor(private restService: RestService, private _router: Router) { }

  ngOnInit() {
    this.editClicked = false;
    this.getAll();
  }

  revealEdit(id: String){
    this.editClicked = true;
    this.passed_Id = id;
    //pass id (and editClicked??) to rest-edit component
  }

  listenToEdit(event){
    console.log('hearing rest-edit in rest-list', event);
    if(event == 'edit'){
      this.getAll();
    }
    this.editClicked=false;
  }

  goToNewRest(){
    this._router.navigate(['new']);
  }

  submitEdit(){
    this.getAll();
  }

  removeRest(id: String){
    this.restService.removeRest(id).subscribe(response=> this.getAll());
  }

  goToDetail(id: String){
    this._router.navigate(['reviews', id]);
  }

  getAll(){
    this.restService.getAll().subscribe(rests => this.rests = rests as Restaurant[]);
  }
}
