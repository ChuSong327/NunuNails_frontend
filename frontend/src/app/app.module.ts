import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { PageHomepageComponent } from './page-homepage/page-homepage.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CoverHomepageComponent } from './cover-homepage/cover-homepage.component';
import { FooterInfoListComponent } from './footer-info-list/footer-info-list.component';
import { FooterSubscriptionComponent } from './footer-subscription/footer-subscription.component';
import { FooterFollowListComponent } from './footer-follow-list/footer-follow-list.component';
import { CategoryWhiteComponent } from './category-white/category-white.component';
import { CategoryColoredComponent } from './category-colored/category-colored.component';
import { CategoryWhite2Component } from './category-white2/category-white2.component';
import { PageProductPressOnComponent } from './page-product-press-on/page-product-press-on.component';
import { PageProductGlueOnComponent } from './page-product-glue-on/page-product-glue-on.component';
import { PageProductNudeComponent } from './page-product-nude/page-product-nude.component';
import { MinorNavbarComponent } from './minor-navbar/minor-navbar.component';
import { CoverPressOnComponent } from './cover-press-on/cover-press-on.component';
import { CoverGlueOnComponent } from './cover-glue-on/cover-glue-on.component';
import { CoverNudeComponent } from './cover-nude/cover-nude.component';
import { ProductPressOnComponent } from './product-press-on/product-press-on.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    PageHomepageComponent,
    MainNavbarComponent,
    FooterComponent,
    CoverHomepageComponent,
    FooterInfoListComponent,
    FooterSubscriptionComponent,
    FooterFollowListComponent,
    CategoryWhiteComponent,
    CategoryColoredComponent,
    CategoryWhite2Component,
    PageProductPressOnComponent,
    PageProductGlueOnComponent,
    PageProductNudeComponent,
    MinorNavbarComponent,
    CoverPressOnComponent,
    CoverGlueOnComponent,
    CoverNudeComponent,
    ProductPressOnComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
