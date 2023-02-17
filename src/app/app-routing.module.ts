import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ComprarPComponent } from './Components/comprar-p/comprar-p.component';

const routes: Routes = [
  {path: 'inicio', component: AppComponent, children:[
    {path: 'producto/:idP', component: ComprarPComponent}
  ]},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
