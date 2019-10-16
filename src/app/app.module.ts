import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/home/header/header.component';
import { SliderComponent } from './components/home/slider/slider.component';
import { ServicesComponent } from './components/home/services/services.component';
import { ParallaxComponent } from './components/home/parallax/parallax.component';
import { TratamientosComponent } from './components/home/tratamientos/tratamientos.component';
import { ContactComponent } from './components/home/contact/contact.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { ComentsComponent } from './components/home/coments/coments.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    ServicesComponent,
    ParallaxComponent,
    TratamientosComponent,
    ContactComponent,
    FooterComponent,
    ComentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
