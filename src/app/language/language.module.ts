import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguagesComponent } from './languages/languages.component';
import { LanguageItemComponent } from './language-item/language-item.component';
import { AddLanguageComponent } from './add-language/add-language.component';
import { Over2000Pipe } from './over2000.pipe';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  { path: '', component: LanguagesComponent},
  { path: 'add-language', component: AddLanguageComponent},
];

@NgModule({
  declarations: [
    LanguagesComponent,
    LanguageItemComponent,
    AddLanguageComponent,
    Over2000Pipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class LanguageModule { }
