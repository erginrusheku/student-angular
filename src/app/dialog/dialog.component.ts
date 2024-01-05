import { Component } from '@angular/core';
import { ClassroomsModel } from '../classrooms/classrooms.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogRef } from '@angular/material/dialog';
import { ClassroomService } from '../service/classroom-service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  classroom: ClassroomsModel = {
    id: 0, // Initialize the 'id' property
    classrooms: '', 
    student: { name: '', lastName: '' },
  };
  dataSource!: MatTableDataSource<ClassroomsModel>;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    private classroomsService: ClassroomService
  ) {}

  ngOnInit(){
    this.dataSource = new MatTableDataSource<ClassroomsModel>([this.classroom]);
  }

  add() { ///////////////////////////////////////////////
    if (this.classroom) {
      this.classroomsService.add(this.classroom).subscribe((result) => {
        if (result) {
          
          this.dataSource.data.push(result);
          this.dialogRef.close(result); // Make sure the result contains the 'id'
        }
      });
    }
  }
}
