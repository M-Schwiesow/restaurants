import { Restaurant } from './../restaurant';
import { RestService } from './../rest.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-rest-edit',
  templateUrl: './rest-edit.component.html',
  styleUrls: ['./rest-edit.component.css']
})
export class RestEditComponent implements OnInit {
  @Input() editClicked: Boolean;
  @Input() restId: String;
  @Output() closeThis = new EventEmitter();
  restaurant: Restaurant;
  errors: any = [];

  constructor(private restService: RestService) { }


  ngOnInit() {
    this.getRestById(this.restId);
  }

  closeEdit(){
    console.log('emitting in rest-edit');
    this.closeThis.emit('cancel');
    this.editClicked = false;
  }

  getRestById(id: String){
    this.restService.getRestById(id).subscribe(rest => this.restaurant = rest as Restaurant);
  }

  editRest(id: String){
    console.log('form submitted');
    this.restService.editRest(this.restaurant._id, this.restaurant).subscribe((response)=>{
      if(response['message'] === 'error'){
        console.log(response);
        this.errors = response['errors'];
        console.log("this.errors after set", this.errors);
      } else {
        this.closeThis.emit('edit')
      }
    })
    
  }
  
  
}
