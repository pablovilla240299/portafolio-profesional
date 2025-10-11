import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'sobre-mi', component:SobreMiComponent},
    {path: 'proyectos', component: ProyectosComponent},
    {path: 'contacto', component:ContactoComponent},
];
