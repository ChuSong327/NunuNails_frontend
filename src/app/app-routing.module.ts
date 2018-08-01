import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { PageHomepageComponent } from "./page-homepage/page-homepage.component";
import { PageProductPressOnComponent } from "./page-product-press-on/page-product-press-on.component";
import { PageProductGlueOnComponent } from "./page-product-glue-on/page-product-glue-on.component";
import { PageProductNudeComponent } from "./page-product-nude/page-product-nude.component";

const routes: Routes = [
  { path: "", redirectTo: "/homepage", pathMatch: "full" },
  { path: "homepage", component: PageHomepageComponent },
  { path: "press-on-nails", component: PageProductPressOnComponent },
  { path: "glue-on-nails", component: PageProductGlueOnComponent},
  { path: "nude-acrylic-french", component: PageProductNudeComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
