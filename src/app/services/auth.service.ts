import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import { User } from '../models/user';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class AuthService {
  public BASE_URL_PROXY: string = 'http://localhost:4200/v1';
  public BASE_URL: string = 'http://localhost:4200/';
  private headers: Headers = new Headers({
    'Content-Type' : 'application/json'
  });
  
  constructor(private http: Http) {}
  
  login(user: User): Promise<any> {
    let url: string = `${this.BASE_URL_PROXY}/login`;
    let retorno = this.http.post(url, user, {headers: this.headers}).toPromise();
    console.log(retorno);
    return retorno;
  }

  getUsers(): Promise<any> {
    let url: string = `${this.BASE_URL_PROXY}/user`;
    let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
    let options = new RequestOptions({ headers: headers });
    let retorno = this.http.get(url, options).toPromise();
    return retorno;
}

  getAllFederatives() :Promise<any> {
    
    let url: string = `${this.BASE_URL_PROXY}/address/federative-unit`;
    let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
    let options = new RequestOptions({ headers: headers });
    let retorno = this.http.get(url, options).toPromise();
    return retorno;
  }

  register(user: User): Promise<any> {
    let url: string = `${this.BASE_URL_PROXY}/register`;
    return this.http.post(url, user, {headers: this.headers}).toPromise();
  }

  ensureAuthenticated(token): Promise<any> {
    let url: string = `${this.BASE_URL}status`;
    let headers: Headers = new Headers({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    return this.http.get(url, {headers: headers}).toPromise();
  }
  
  aviso(): string {
    return 'Chamando o auth.service';
  }


}