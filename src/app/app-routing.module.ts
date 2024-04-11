import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { BuscarComponent } from './pages/buscar/buscar.component';

const routes: Routes = [
  { path:'home', component:HomeComponent},
  { path: 'heroes/id', component:HeroeComponent},
  { path: 'buscar/:texto', component:BuscarComponent},
  { path: '**', pathMatch:'full', redirectTo:'home'},
  { path: '', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
