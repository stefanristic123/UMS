import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignService } from 'src/app/_services/assign.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.scss']
})
export class AssignComponent implements OnInit {

  formAssign!: FormGroup;
  user: any;
  id: any;
  data: any;

  constructor(
    private service: AssignService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private snack: MatSnackBar,
  ) {
    this.createForm();
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getData();
    });
  }

  getData() {
    if (this.id) {
      this.service.getAssign().subscribe(res => {
        this.data = res.find((item: any) => { return item.userId == this.id; })
        this.createForm();
        this.formAssign.patchValue(this.data);
      })
    } else {
      console.log("error")
    }
  }

  createForm() {
    this.formAssign = this.fb.group({
      id: [],
      userId: [],
      assignStatus: [, Validators.required],
    });
  }

  ngOnInit(): void { }

  submitForm(): void {
    if (this.formAssign.value.id) {
      this.service.editAssignPremissions(this.formAssign.value).subscribe(res => {
        this.snack.open("Premissions update", 'Got it', {
          duration: 3000,
        });
        this.router.navigate(['']);
      }, err => {
        this.snack.open("Error happend" + err, 'Got it', {
          duration: 3000,
        });
      })
    } else {
      this.formAssign.value.userId = +this.id
      const form = this.formAssign.value;
      this.service.addAssignPremissions(form).subscribe(res => {
        this.snack.open("Premissions update", 'Got it', {
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

}
