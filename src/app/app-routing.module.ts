import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { BodyComponent } from './body/body.component';


const routes: Routes = [
  {path:'body',component:BodyComponent},
  {path:'',component:BodyComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
