import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserItemComponent } from './user-item/user-item.component';
import { UsersComponent } from './users.component';
import { BrowserModule } from '@angular/platform-browser'
import { MaterialModule } from '../material.module';
import { AssignComponent } from './assign/assign.component';


@NgModule({
  declarations: [UsersComponent, UserItemComponent, AssignComponent],
  exports: [
    UsersComponent,
    UserItemComponent
  ],
  entryComponents: [
    UsersComponent,
    UserItemComponent
  ],
  imports: [
    MaterialModule, 
    FormsModule, 
    ReactiveFormsModule,
    BrowserModule
]
})
export class UsersModule {}