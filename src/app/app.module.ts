import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modules
import { ComponentsModule } from './components/components.module';

// Angular Material

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Modules
    ComponentsModule,
    // Angular Material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
