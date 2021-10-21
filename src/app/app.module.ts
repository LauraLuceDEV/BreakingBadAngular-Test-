import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterContainerComponent } from './Components/character-container/character-container.component';
import { HomeComponent } from './Pages/home/home.component';
import { CharacterDetailsComponent } from './Pages/character-details/character-details.component';
import { MenuBarComponent } from './Components/menu-bar/menu-bar.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { FooterComponent } from './Components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {CdkTableModule} from '@angular/cdk/table';
@NgModule({
  declarations: [
    AppComponent,
    CharacterContainerComponent,
    HomeComponent,
    CharacterDetailsComponent,
    MenuBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IvyCarouselModule,
    CdkTableModule,
    MatSliderModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
