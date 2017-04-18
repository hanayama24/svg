import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SvgComponent } from './svg/svg.component';
import { SvgContentComponent } from './svg/svg-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SvgLineComponent } from './svg-line/svg-line.component';
import { SvgCircleComponent } from './svg-circle/svg-circle.component';

@NgModule({
  declarations: [
    AppComponent,
    SvgComponent,
    SvgContentComponent,
    SvgLineComponent,
    SvgCircleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
