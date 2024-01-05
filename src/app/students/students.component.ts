import { Component } from '@angular/core';

interface PeriodicElement {
  id: number;
  name: string;
  lastName: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'Hydrogen', lastName: 'Legeni' },
  { id: 2, name: 'Helium', lastName: '4.0026' },
  { id: 3, name: 'Lithium', lastName: '6.941' },
]

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

}
