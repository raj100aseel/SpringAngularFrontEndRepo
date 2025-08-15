import { Component, OnInit } from '@angular/core';
import { Employee1, Employeeservice } from '../employeeservice';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-employee',
  imports: [HttpClient],
  templateUrl: './employee.html',
  styleUrl: './employee.css'
})
export class Employee implements OnInit{
  employees : Employee1[] = [];
  constructor(private employeeService : Employeeservice){}
  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(
      response => {this.employees = response;}
    )
  }

}
