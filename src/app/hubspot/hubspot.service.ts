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
    formData.append("client_id", "63f70c98-1a07-47f1-85a8-1b3856408c45");
    formData.append("client_secret", "6db3ef3f-3197-41d2-a79e-4d65837f3300");
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
