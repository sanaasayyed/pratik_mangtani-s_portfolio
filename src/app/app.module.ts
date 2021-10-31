import * as jQuery from 'jquery';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { StripeModule } from "stripe-angular"
import { NgxCaptureModule } from 'ngx-capture';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,   
    HttpClientModule,
    SocialLoginModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    StripeModule.forRoot("sk_test_51IRj1BGKvnjJ88wcKdzqQeXK9jSAsiRwxGw3GOBvuDSwgAXPqXk99gzD9KJnzQnuu2Nw4HOfCjCtIaa4JjALGNaa00eW4xCHjM"),
    NgxCaptureModule     
    ],
  providers: [
    StatusBar,
    FormsModule,    
    // ReactiveFormsModule,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptorService,
    //   multi: true
    // },
    SplashScreen,
    //{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '907009432190-v7bpjvuurie68eakqf5neovb5oj3h0b0.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('1312901752440547')
          }
        ]
      } as SocialAuthServiceConfig,
    } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}