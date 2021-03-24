import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProduitsComponent } from './produits/produits.component';
import { FormComponent } from './form/form.component';
import { FormparticulierComponent } from './formparticulier/formparticulier.component';




const routes: Routes = [
  
  {path:'',component:HomeComponent},
  {path:'produits',component:ProduitsComponent},
  {path:'form',component:FormComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'formpar',component:FormparticulierComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
