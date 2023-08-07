import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './cards/home/home.component';

export enum appRoutes {
  HOME = 'home',
  WELCOME = 'welcome',
  NEW_CARD = 'new-card',
  EDIT_CARD = 'edit-card',
  LOGIN = 'login',
  SIGNUP = 'signup',
}

const routes: Routes = [
  { path: '', redirectTo: appRoutes.HOME, pathMatch: 'full' },
  { path: appRoutes.HOME, component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
