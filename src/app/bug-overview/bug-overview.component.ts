import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';

import { KeysPipe } from '../pipes/keys.pipe';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { BugServiceService } from '../services/bug-service.service';
import { Bug } from '../common/Bug';

@Component({
  selector: 'app-bug-overview',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    KeysPipe,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
  ],
  templateUrl: './bug-overview.component.html',
  styleUrls: ['./bug-overview.component.scss'],
})
export class BugOverviewComponent {
  columns = {
    title: 'Title',
    priority: 'Priority',
    reporter: 'Reporter',
    created: 'Date Created',
    status: 'Status',
    actions: 'Edit',
  };

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private bugService: BugServiceService) {}

  data: any;

  ngOnInit(): void {
    this.bugService.getBugs().subscribe((response) => {
      this.data = new MatTableDataSource(response)
      this.data.sort = this.sort;
    });
  }

}
