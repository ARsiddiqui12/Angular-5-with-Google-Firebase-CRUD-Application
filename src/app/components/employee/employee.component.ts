import { Component, OnInit } from '@angular/core';

import {EmployeeService} from '../../services/employee.service';

import {NgForm} from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private _EmployeeService:EmployeeService,private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(employeeForm:NgForm)
  {

    if (employeeForm.value.$key == null)
    this._EmployeeService.insertEmployee(employeeForm.value);
  else
    this._EmployeeService.updateEmployee(employeeForm.value);
  this.resetForm(employeeForm);
  this.toastr.success('Submitted Succcessfully', 'Employee Register');

  }

  resetForm(employeeForm?:NgForm)
  {
    if (employeeForm != null)
    employeeForm.reset();
    this._EmployeeService.selectedEmployee = {

      $key:null,
      name:'',
      position:'',
      office:'',
      salary:0


    };

  }

}
