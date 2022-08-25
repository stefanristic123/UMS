import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../_services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {

  id: any;
  data: any;
  user: any;
  formUser!: FormGroup;
  hide = true;

  constructor(
    private service: UsersService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private snack: MatSnackBar,
    private router: Router,
    private dialogRef: MatDialogRef<UserItemComponent>,
    @Inject(MAT_DIALOG_DATA) public deleteId: any
  ) {
    this.createForm();
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getData();
    });
  }

  getData() {
    if (this.id) {
      this.user = this.service.getSingleUser(this.id).subscribe(res => {
        this.data = res;
        this.createForm();
        this.formUser.patchValue(this.data);
      })
    } else {
      console.log("error")
    }
  }

  createForm() {
    this.formUser = this.fb.group({
      id: [],
      firstName: [, Validators.required],
      lastName: [, Validators.required],
      userName: [, Validators.required],
      email: [, Validators.email],
      password: [, Validators.required],
      status: [, Validators.required],
    });
  }

  ngOnInit(): void { }

  submitForm(): void {
    if (this.formUser.value.id) {
      this.service.editUser(this.formUser.value).subscribe(res => {
        this.snack.open("User edited", 'Got it', {
          duration: 3000,
        });
        this.router.navigate(['']);
      }, err => {
        this.snack.open("Error happend" + err, 'Got it', {
          duration: 3000,
        });
      })
    } else {
      this.service.addUser(this.formUser.value).subscribe(res => {
        this.snack.open("User created", 'Got it', {
          duration: 3000,
        });
        this.router.navigate(['']);
      }, err => {
        this.snack.open("Error happend" + err, 'Got it', {
          duration: 3000,
        });
      })
    }
  }

  delete(): void {
    this.service.deleteUser(this.deleteId.id).subscribe(res => {
      this.snack.open("User deleted", 'Got it', {
        duration: 3000,
      });
      this.router.navigate(['']);
      this.dialogRef.close();
    }, err => {
      this.snack.open("Error happend" + err, 'Got it', {
        duration: 3000,
      });
    })
  }

}
