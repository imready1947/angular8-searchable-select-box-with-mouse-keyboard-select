import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SelectDropdownComponent } from './select-dropdown/select-dropdown.component';
import { TextSearchPipe } from './text-search.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, SelectDropdownComponent, TextSearchPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
