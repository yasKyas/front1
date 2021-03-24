import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProduitsComponent } from './produits/produits.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { FormparticulierComponent } from './formparticulier/formparticulier.component';
import { FormtreComponent } from './formtre/formtre.component';
import { FormproComponent } from './formpro/formpro.component';
import { FormentrepriseComponent } from './formentreprise/formentreprise.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProduitsComponent,
    ContactComponent,
    LoginComponent,
    FormparticulierComponent,
    FormtreComponent,
    FormproComponent,
    FormentrepriseComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
