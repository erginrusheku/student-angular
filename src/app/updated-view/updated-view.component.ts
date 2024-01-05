import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClassroomsModel } from '../classrooms/classrooms.component';

@Component({
  selector: 'app-updated-view',
  templateUrl: './updated-view.component.html',
  styleUrls: ['./updated-view.component.css']
})
export class UpdatedViewComponent {
  editForm!: FormGroup;
  classrooms!: ClassroomsModel[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UpdatedViewComponent>,
    private fb: FormBuilder
  ) {
    this.editForm = this.fb.group({
      classrooms: [data.classrooms.name],
      students: this.fb.group({
        name: [data.classrooms.student.name],
        lastName: [data.classrooms.student.lastName],
      }),
    });

    this.classrooms = data.classrooms;
  }
  saveChanges() {
    const updatedData = this.editForm.value;
    updatedData.id = this.data.classroom.id;

    // Update the user's data in the local array
    const index = this.classrooms.findIndex((classroom) => classroom.id === updatedData.id);
    if (index !== -1) {
      this.classrooms[index] = updatedData;
    }

    // Close the dialog with the updated data
    this.dialogRef.close(updatedData);
  }

  closeDialog() {
    this.dialogRef.close();
  }

}

