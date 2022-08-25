import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../_services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { UserItemComponent } from './user-item/user-item.component';
import {PageEvent} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  data: any;
  searchData: any;
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent!: PageEvent;

  @ViewChild(MatSort) sort!: MatSort

  displayedColumns: string[] = [
    "id",
    "email",
    "firstName",
    "lastName",
    "status",
    "userName",
    "buttons"
  ];
  dataSource!: MatTableDataSource<any>;;

  constructor(
    private service: UsersService,
    private router: Router,
    private snack: MatSnackBar,
    private dialog: MatDialog,
    ) { }

  ngOnInit(): void {
    this.getUser();
  }

  search(){
    if(this.searchData == ""){
      this.getUser();
    } else {
      this.service.searchUsers(this.searchData).subscribe(res => {
        this.dataSource = res;
      })
    }
  }

  onPaginateChange(event: PageEvent){
    let page = event.pageIndex;
    let size = event.pageSize;
    page = page + 1;
    this.service.getUsers(page, size).subscribe(res => {
      this.dataSource = res;
    })
  }

  getUser() {
    this.service.getUsers(1, 10).subscribe(res => {
      this.data = res;
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
    })
  }

  addNewUser(){
    this.router.navigate(['user']);
  }

  editUser(id: any) {
    this.router.navigate(['user', id]);
  }

  assign(id: any){
    this.router.navigate(['assign', id]);
  }

  delete(id: any): void {
    const dialogRef = this.dialog.open(UserItemComponent, {
      height: 'auto',
      width: '400px',
      disableClose: true,
      data: {id, "data": 'hide'}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getUser()
     });

  }
  
}
