import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Modules
import { ComponentsModule } from './components/components.module';
import { CoreModule } from './core/core.module';

// Angular Material


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // Modules
    ComponentsModule,
    CoreModule,
    // Angular Material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
