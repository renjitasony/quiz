import { Injectable } from '@angular/core';
import { User } from './user';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private httpClient:HttpClient) { }
  public addUser(user:User){
    let url ='https://maverick9008.herokuapp.com/user/add';
    return this.httpClient.post(url,user);
  }
  public authenticate(user:User){
    let url ='https://maverick9008.herokuapp.com/user/authenticate';
    return this.httpClient.post(url,user);
  }
  public storeUserData(id,score){
    let url = 'https://maverick9008.herokuapp.com/user/storeuserdata/'+id+'/'+score;
    return this.httpClient.get(url);
  }
}
