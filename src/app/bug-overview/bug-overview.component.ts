import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';

import { KeysPipe } from '../pipes/keys.pipe';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

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
    RouterModule
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
    actions: 'Edit'
  };

  responseData = [
    {
      id: '1',
      title: 'bug 1',
      description: 'This is a simple bug',
      priority: 1,
      reporter: 'QA',
      status: 'Done',
      created: '2022-10-27',
      comments: [
        {
          reporter: 'Fan',
          description: 'this is just a description',
        },
      ],
    },
    {
      id: '6358f56cbf47a30046de24f0',
      title: 'bug 2',
      description: 'This is a simple bug',
      priority: 1,
      reporter: 'QA',
      status: 'Done',
      created: '2022-10-26',
      comments: [
        {
          reporter: 'Fan',
          description: 'this is just a description',
        },
      ],
    },
    {
      id: '3',
      title: 'bag test',
      description: 'this is a test description',
      priority: 0,
      reporter: 'DEV',
      status: 'For Review',
      created: '2022-09-30T16:32:19.595Z',
      comments: [],
    },
  ];

  data = new MatTableDataSource(this.responseData);

  @ViewChild(MatSort)
  sort!: MatSort;

  ngAfterViewInit() {
    this.data.sort = this.sort;
  }

}
