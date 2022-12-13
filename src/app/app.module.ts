import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectiveViewerComponent } from './directive-viewer/directive-viewer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HoverDirective } from './hover.directive';
import { MyIfDirective } from './my-if.directive';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaxCountDirective } from './max-count.directive';
import { MinCountDirective } from './min-count.directive';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveViewerComponent,
    HoverDirective,
    MyIfDirective,
    BasicFormComponent,
    MaxCountDirective,
    MinCountDirective,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
