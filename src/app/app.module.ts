import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Firebase
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from  'angularfire2/database'; 

//Env
import {environment} from '../environments/environment';

//Forms
import {FormsModule} from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

//Toastr Message
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
