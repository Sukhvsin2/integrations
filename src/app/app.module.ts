import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HubspotComponent } from './hubspot/hubspot.component';
import { AuthModule } from '@auth0/auth0-angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HubspotComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'https://app.hubspot.com/oauth/authorize?client_id=63f70c98-1a07-47f1-85a8-1b3856408c45&redirect_uri=http://localhost:4200/&scope=crm.lists.read%20crm.objects.contacts.read%20crm.objects.companies.read',
      clientId: '63f70c98-1a07-47f1-85a8-1b3856408c45',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
