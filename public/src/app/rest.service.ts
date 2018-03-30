import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RestService {

  constructor(private _http: HttpClient) { }

  getAll(){
    return this._http.get('/eat');
  }

  getRestById(id: String){
    return this._http.get(`/eat/${id}`);
  }

  newRest(data){
    return this._http.post('/eat', data);
  }

  editRest(id: String, data){
    console.log('editRest from rest.service');
    console.log('edit data from rest.service', data);
    console.log('edit id from rest.service', id);
    return this._http.put(`/eat/${id}`, data);
  }

  addReview(id: String, data){
    return this._http.post(`/eat/review/${id}`, data);
  }

  removeRest(id: String){
    return this._http.delete(`/eat/${id}`);
  }


}
