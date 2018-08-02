import { Component, OnInit } from '@angular/core';

//Service

import {EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers:[EmployeeService]
})
export class EmployeesComponent implements OnInit {

  constructor(private _EmployeeService:EmployeeService) { }

  ngOnInit() {
  }

}
