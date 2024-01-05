import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    debugger
    this.myForm = this.formBuilder.group({
      classrooms: [this.data.element.classrooms, Validators.required],
      //lastName: [this.data.element.lastName, Validators.required],
      name: [this.data.element.students.name, Validators.required],
      lastName: [this.data.element.students.lastName, Validators.required],
    });
  }

  onSubmit() {
    debugger
    if (this.myForm.valid) {
      // Handle form submission here
      console.log(this.myForm.value);
    }
  }
}
