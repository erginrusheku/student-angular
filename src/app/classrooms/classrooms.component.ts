import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from '../dialog/dialog.component';
import { ClassroomService } from '../service/classroom-service';
import { UpdatedViewComponent } from '../updated-view/updated-view.component';
import { ViewComponent } from '../view/view.component';

@Component({
  selector: 'app-classrooms',
  templateUrl: './classrooms.component.html',
  styleUrls: ['./classrooms.component.css']
})
export class ClassroomsComponent implements OnInit {
  classrooms!: ClassroomsModel[]
  dataSource: any;

  constructor(private service: ClassroomService, public dialog: MatDialog) {
  }

  openAddUserDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px', // Set the dialog width as desired
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {

        debugger
        // Handle the data returned from the dialog (new user data)
        // You can add the user to your data source here
        this.dataSource.data.push(result); // Add the new user to the MatTableDataSource
        this.dataSource._updateChangeSubscription(); // Update the table
      }
    });
  }
  ngOnInit(): void {
    this.service.get().subscribe(value => {
      debugger
      this.classrooms = value
      this.classrooms.sort((a, b) => a.id > b.id ? 1 : -1);
      this.dataSource = new MatTableDataSource<ClassroomsModel>(this.classrooms);

    })

  }
  openEditDialog(classroom: ClassroomsModel) {
    const dialogRef = this.dialog.open(UpdatedViewComponent, {
      data: { classroom, classrooms: this.classrooms },
    });

    dialogRef.afterClosed().subscribe((result: ClassroomsModel) => {
      if (result) {
        this.service.edit(result.id, result).subscribe((updated) => {
          const index = this.classrooms.findIndex((u) => u.id === updated.id);
          if (index !== -1) {
            this.classrooms[index] = updated;
            this.dataSource.data = this.classrooms; // Update the MatTableDataSource
          }
        });
      }
    });
  }

  displayedColumns: string[] = ['classroom', 'student', 'actions'];

  openViewDialog(element: ClassroomsModel) {
    debugger
    const dialogRef = this.dialog.open(ViewComponent, {
      data: {
        element
      }
    });
  }
  openDeleteDialog(classroom: ClassroomsModel) {
    // You can open a confirmation dialog here if needed
    // Make an HTTP request to delete the user by their ID
    debugger
    const id = classroom.id;

    this.service.delete(id).subscribe(() => {
      // Delete the user from the local data array
      const index = this.classrooms.indexOf(classroom);
      if (index !== -1) {
        this.classrooms.splice(index, 1);
        this.dataSource.data = this.classrooms; // Update the MatTableDataSource
      }
    });
    // Assuming you have an "id" property in your UserModel that corresponds to the user's ID in the database
  }

}

interface PeriodicElement {
  id: number;
  classrooms: string;
  student: StudentModel;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, classrooms: 'Hydrogen', student: { name: 'test', lastName: 'test' } },
  { id: 2, classrooms: 'Helium', student: { name: 'test', lastName: 'test' } },
  { id: 3, classrooms: 'Lithium', student: { name: 'test', lastName: 'test' } },
];


export interface ClassroomsModel {
  id: number;
  classrooms: string;
  student: StudentModel;
}

export interface StudentModel {
  name: string,
  lastName: string
}
