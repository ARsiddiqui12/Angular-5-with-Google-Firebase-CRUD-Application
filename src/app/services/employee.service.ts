import { Injectable } from '@angular/core';

//Firebase
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';

//Model 
import {Employee} from '../models/employee.model';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeList: AngularFireList<any>;
  selectedEmployee:Employee = new Employee();

  constructor(private firebase:AngularFireDatabase) { }

  getData(){

    this.employeeList = this.firebase.list('employees');

    return this.employeeList;

  }

  insertEmployee(employee:Employee)
  {

    if(!this.employeeList){
      this.employeeList = this.getData();
    }

    this.employeeList.push({

      name:employee.name,
      position:employee.position,
      office:employee.office,
      salary:employee.salary

    });

  }


  updateEmployee(employee:Employee){

    this.employeeList.update(employee.$key,{

      name:employee.name,
      position:employee.name,
      office:employee.name,
      salary:employee.name

    });

  }

  deleteEmployee($key:string){

    this.employeeList.remove($key);

  }



}
