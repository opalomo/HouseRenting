import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/Pages/login/login.component';
import { RegisterComponent } from './Components/Pages/register/register.component';
import { CatalogComponent } from './Components/Pages/catalog/catalog.component';
import { ProfileComponent } from './Components/Pages/profile/profile.component';
import { HomeComponent } from './Components/Pages/home/home.component';


const routes: Routes = [
  {
    path: 'user/login', component : LoginComponent
  },
  {
    path: 'user/register', component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, RegisterComponent, CatalogComponent, ProfileComponent, HomeComponent ];

// Una buena practica para que app.module.ts no se llene de imports
// es crear un array con todos los imports necesarios para que no se pete la otra clase
// en cualquier caso, como no va a ser una ruta por componente este metoodo puede tener sus
// partes flacas
// Como en este caso he creado una carpeta llamada "Pages" dentro de components, todo lo que este ahui dentro
// van a ser paginas que enrutar, por lo que el array contendra todos los componentes de dicha carpeta
