import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HubspotService {

  constructor(private http: HttpClient) { }

  async check(code:string){
    const options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    var formData = new URLSearchParams();
    formData.append("grant_type", "authorization_code");
    formData.append("client_id", "client_id");
    formData.append("client_secret", "client_secret");
    formData.append("redirect_uri", "http://localhost:4200");
    formData.append("code", code);
    
    this.http.post("https://api.hubapi.com/oauth/v1/token/", formData, options)
    .subscribe({
      next(value) {
          console.log(value);
      },
      error(err) {
          console.log(err);
      },
      })      
    }
}
