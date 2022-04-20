import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PageComponent } from './components/page/page.component';
import { FilterComponent } from './components/filter/filter.component';
import { RouterModule } from '@angular/router';
import { Category1Component } from './components/category1/category1.component';
import { Category2Component } from './components/category2/category2.component';
import { Category3Component } from './components/category3/category3.component';
import { Category4Component } from './components/category4/category4.component';
import { Category5Component } from './components/category5/category5.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    FilterComponent,
    Category1Component,
    Category2Component,
    Category3Component,
    Category4Component,
    Category5Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
    {path:'category1',component:Category1Component},
    {path:'category2',component:Category2Component},
    {path:'home',component:PageComponent},
    {path:'category3',component:Category3Component},
    {path:'category4',component:Category4Component},
    {path:'category5',component:Category5Component},
    {redirectTo:'home',path:'',pathMatch:'full'}
    ]),



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
