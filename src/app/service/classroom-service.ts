import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassroomsModel } from '../classrooms/classrooms.component';

@Injectable({
  providedIn: 'root',
})
export class ClassroomService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }


  get() {
    return this.http.get<ClassroomsModel[]>('http://localhost:8080/classrooms');
  }


  add(classrooms: ClassroomsModel) {

    return this.http.post<ClassroomsModel>('http://localhost:8080/classrooms', classrooms);
  }

  // editUser(userId: number, updatedUserData: any): Observable<any> {
  //   const url = `${this.baseUrl}/users/${userId}`; // Define the specific endpoint URL
  //   return this.http.put(url, updatedUserData);
  // }
  edit(id: number, updatedData: any): Observable<any> {
    const url = `${this.baseUrl}/classrooms/${id}`;
    return this.http.put(url, updatedData);
  }

  // Delete by sending a DELETE request to the backend
  delete(id: number): Observable<any> {
    const url = `${this.baseUrl}/classrooms/${id}`; // Define the specific endpoint URL
    return this.http.delete(url);
  }
}
