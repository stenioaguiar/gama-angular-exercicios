import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { LanguagesComponent } from './languages/languages.component';
import { HttpClientModule } from '@angular/common/http';
import { LanguageItemComponent } from './language-item/language-item.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: 'contador', component : ContadorComponent},
  { path: 'languages', component: LanguagesComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    LanguagesComponent,
    LanguageItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
