import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PopupComponent } from './popup/popup.component';
import { InnerPopupComponent } from './inner-popup/inner-popup.component';
import { StopPropagationDirective } from './stop-propagation.directive';
import { ClosePageDirective } from './close-page.directive';

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    InnerPopupComponent,
    StopPropagationDirective,
    ClosePageDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
