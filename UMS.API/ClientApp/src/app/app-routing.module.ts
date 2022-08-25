import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignComponent } from './users/assign/assign.component';
import { UserItemComponent } from './users/user-item/user-item.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: '', component: UsersComponent},
  {path: 'user', component: UserItemComponent},
  {path: 'user/:id', component: UserItemComponent},
  {path: 'assign/:id', component: AssignComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
