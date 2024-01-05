import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ClassroomsComponent } from './classrooms/classrooms.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'classrooms', component: ClassroomsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
