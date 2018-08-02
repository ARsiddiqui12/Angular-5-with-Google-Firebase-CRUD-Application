import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import {Employee} from '../../models/employee.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList:Employee[];
  constructor(private _EmployeeService:EmployeeService,private toastr: ToastrService) { }

  ngOnInit() {
    var x = this._EmployeeService.getData();
    x.snapshotChanges().subscribe(item => {
      this.employeeList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.employeeList.push(y as Employee);
      });

  });

}

onEdit(emp: Employee) {
  this._EmployeeService.selectedEmployee = Object.assign({}, emp); 
 console.log(emp);
}


onDelete(key: string) {
  if (confirm('Are you sure to delete this record ?') == true) {
    this._EmployeeService.deleteEmployee(key);
    this.toastr.warning("Deleted Successfully", "Employee register");
  }

}

}