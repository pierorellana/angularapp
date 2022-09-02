import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './app/login/login.component';
import { PaginaComponent } from './app/pagina/pagina.component';


const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        pathMatch: 'full'
    },
    {
        path: 'pagina',
        component: PaginaComponent
    },

    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot( routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}