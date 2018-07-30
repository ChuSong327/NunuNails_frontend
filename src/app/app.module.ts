import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageHomepageComponent } from './page-homepage/page-homepage.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CoverHomepageComponent } from './cover-homepage/cover-homepage.component';
import { FooterInfoListComponent } from './footer-info-list/footer-info-list.component';
import { FooterSubscriptionComponent } from './footer-subscription/footer-subscription.component';
import { FooterFollowListComponent } from './footer-follow-list/footer-follow-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHomepageComponent,
    MainNavbarComponent,
    FooterComponent,
    CoverHomepageComponent,
    FooterInfoListComponent,
    FooterSubscriptionComponent,
    FooterFollowListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
