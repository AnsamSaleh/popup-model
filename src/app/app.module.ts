import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PopupComponent } from './popup/popup.component';
import { InnerPopupComponent } from './inner-popup/inner-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    InnerPopupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
