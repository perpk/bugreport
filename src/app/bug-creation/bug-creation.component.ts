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
import { SelectOption } from '../common/SelectOption';
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

  priorities = [
    new SelectOption<string, string>('', null),
    new SelectOption<number, number>(0, 0),
    new SelectOption<number, number>(1, 1),
    new SelectOption<number, number>(2, 2),
  ];

  reporters = [
    new SelectOption<string, string>('', null),
    new SelectOption<string, string>('qa', 'QA'),
    new SelectOption<string, string>('po', 'PO'),
    new SelectOption<string, string>('dev', 'DEV'),
  ];

  status = [
    new SelectOption<string, string>('', null),
    new SelectOption<string, string>('forReview', 'For Review'),
    new SelectOption<string, string>('done', 'Done'),
    new SelectOption<string, string>('rejected', 'Rejected'),
  ];

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
      if (val === 'qa') {
        this.bugForm.controls['status'].setValidators([Validators.required]);
      } else {
        this.bugForm.controls['status'].clearValidators();
        this.bugForm.controls['status'].markAsUntouched();
      }
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


}
