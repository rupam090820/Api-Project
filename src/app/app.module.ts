import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomPipe } from './custom.pipe';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FoodComponent } from './food/food.component';
import { PnfComponent } from './pnf/pnf.component';

//import httpclientModule
import { HttpClientModule } from '@angular/common/http';
//
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CustomPipe,
    HomeComponent,
    AboutComponent,
    FoodComponent,
    PnfComponent
  ],
  imports: [
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
