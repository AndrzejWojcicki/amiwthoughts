import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ThoughttableComponent } from './thoughttable/thoughttable.component';
import { DateChangerPipe } from './thoughttable/datepipe/date-changer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ThoughttableComponent,
    DateChangerPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
