import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/Pages/home/home.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { LoginComponent } from './Components/Pages/login/login.component';
import { RegisterComponent } from './Components/Pages/register/register.component';
import { ProfileComponent } from './Components/Pages/profile/profile.component';
import { CatalogComponent } from './Components/Pages/catalog/catalog.component';
import { FooterComponent } from './Components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    CatalogComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
