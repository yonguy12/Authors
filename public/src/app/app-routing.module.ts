import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllAuthorComponent } from './all-author/all-author.component';
import { GetAuthorComponent } from './get-author/get-author.component';
import { CreateAuthorComponent } from './create-author/create-author.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/authors' },
  { path: 'authors', component: AllAuthorComponent },
  { path: 'authors/edit/:id', component: EditComponent },
  { path: 'authors/create', component: CreateAuthorComponent },
  { path: 'authors/:id', component: GetAuthorComponent },
  { path: '**', redirectTo: 'authors' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
