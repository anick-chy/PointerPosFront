import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { NotFoundComponent } from './not-found.component';
import { LoginComponent } from './login.component'

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [ 
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}