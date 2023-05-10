import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { ActivatedRoute } from '@angular/router'
import { HubspotService } from './hubspot.service';


@Component({
  selector: 'app-hubspot',
  templateUrl: './hubspot.component.html',
  styleUrls: ['./hubspot.component.scss']
})
export class HubspotComponent implements OnInit {

  code: string = '';

  constructor(private authService: AuthService, private route: ActivatedRoute, private hubspotService: HubspotService) { }
  
  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); 
        this.code= params['code'];
        console.log(this.code); 
      }
    );
    this.getToken();
  }

  async getToken(){
    this.hubspotService.check(this.code);
  }

  login(){
    console.log("login works!");
    this.authService.loginWithRedirect();
  }
}
