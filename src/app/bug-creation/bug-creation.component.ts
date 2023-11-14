import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BugServiceService } from '../services/bug-service.service';
import { Bug } from '../common/Bug';

@Component({
  selector: 'app-bug-creation',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './bug-creation.component.html',
  styleUrls: ['./bug-creation.component.scss'],
})
export class BugCreationComponent {
  bugForm!: FormGroup;

  constructor(private bugService: BugServiceService) {

  }

  ngOnInit(): void {
    this.bugForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.maxLength(255),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.maxLength(2048),
      ]),
      priority: new FormControl(null, []),
      reporter: new FormControl(null, []),
      status: new FormControl(null, []),
    });
    this.bugForm.get('reporter')?.valueChanges.subscribe(val => {
      if (val === 'QA') {
        this.bugForm.controls['status'].setValidators([Validators.required]);
      } else {
        this.bugForm.controls['status'].clearValidators();
      }
      this.bugForm.controls['status'].updateValueAndValidity();
    });
  }

  submitBug() {
    const bug = new Bug(
      Math.floor(Math.random() * 10000).toString(),
      this.bugForm.get('title')?.value,
      this.bugForm.get('description')?.value,
      this.bugForm.get('priority')?.value,
      this.bugForm.get('reporter')?.value,
      this.bugForm.get('status')?.value,
      new Date(),
      []
    );
    this.bugService.submitBug(bug).subscribe((r) => console.log(r));
  }

  resetForm() {
    this.bugForm.reset();
  }
}
