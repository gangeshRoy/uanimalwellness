import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }   from './Home/home.component';

const appRoutes: Routes = [

{ path: '', redirectTo: '/homePage', pathMatch: 'full' },
{ path: 'homePage',  component: HomeComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes),
   
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
