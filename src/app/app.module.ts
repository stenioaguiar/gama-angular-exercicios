import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { LanguagesComponent } from './languages/languages.component';
import { HttpClientModule } from '@angular/common/http';
import { LanguageItemComponent } from './language-item/language-item.component';
import {RouterModule, Routes} from '@angular/router';
import { AddLanguageComponent } from './add-language/add-language.component';
import { FormsModule} from '@angular/forms';
import { Over2000Pipe } from './over2000.pipe';

const routes: Routes = [
  { path: 'contador', component : ContadorComponent},
  { path: 'languages', component: LanguagesComponent},
  { path: 'add-language', component: AddLanguageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    LanguagesComponent,
    LanguageItemComponent,
    AddLanguageComponent,
    Over2000Pipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
