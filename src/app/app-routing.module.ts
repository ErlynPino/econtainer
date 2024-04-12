import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeroDetailsComponent } from './pages/hero-details/hero-details.component';

const routes: Routes = [
  { path:'home', component:HomeComponent},
  { path: 'hero-details/:id', component: HeroDetailsComponent },
  { path: '**', pathMatch:'full', redirectTo:'home'},
  { path: '', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
