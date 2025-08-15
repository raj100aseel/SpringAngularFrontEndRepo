import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Employee1 {
  constructor(
    public empId : string,
    public name : string,
    public designation : string,
    public salary : number
  ){}
}
@Injectable({
  providedIn: 'root'
})
export class Employeeservice {
  constructor(private httpClient:HttpClient){}

  getEmployees() {
    return this.httpClient.get<Employee1[]>('http://localhost:8080/allemployees');
  }
}
