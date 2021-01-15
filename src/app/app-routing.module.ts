import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { PageHomepageComponent } from "./page-homepage/page-homepage.component";
import { PageProductPressOnComponent } from "./page-product-press-on/page-product-press-on.component";
import { PageProductGlueOnComponent } from "./page-product-glue-on/page-product-glue-on.component";
import { PageProductNudeComponent } from "./page-product-nude/page-product-nude.component";
import { PageProductDetailComponent } from './page-product-detail/page-product-detail.component';
import { PageCheckoutComponent } from './page-checkout/page-checkout.component';
import { PageCartComponent } from './page-cart/page-cart.component';
import { PageSizeStylesComponent } from './page-size-styles/page-size-styles.component';
import { PageGlueComponent } from './page-glue/page-glue.component';
import { PageToolsComponent } from './page-tools/page-tools.component';
import { PageConfirmationComponent } from './page-confirmation/page-confirmation.component';

const routes: Routes = [
  { path: "", redirectTo: "/homepage", pathMatch: "full" },
  { path: "homepage", component: PageHomepageComponent },
  { path: "press-on-nails", component: PageProductPressOnComponent },
  { path: "glue-on-nails", component: PageProductGlueOnComponent },
  { path: "nude-acrylic-french", component: PageProductNudeComponent },
  { path: "product-detail/:product_id", component: PageProductDetailComponent },
  { path: "shopping-cart", component: PageCartComponent},
  { path: "checkout", component: PageCheckoutComponent },
  { path: "size-styles", component: PageSizeStylesComponent },
  { path: "glue", component:PageGlueComponent},
  { path: "tools", component: PageToolsComponent},
  { path: "confirmation", component: PageConfirmationComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true })],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
