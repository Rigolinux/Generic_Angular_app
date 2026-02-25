import { Component } from '@angular/core';
import { DynamicFormFieldConfig } from './dynamic-form/dynamic-form-field-config';

import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-demo-page',
  standalone: true,
  imports: [CommonModule, DynamicTableComponent, DynamicFormComponent],
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.css']
})
export class DemoPageComponent {
  tableColumns = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'role', label: 'Role' }
  ];
  tableData = [
    { name: 'Alice', age: 30, role: 'Developer' },
    { name: 'Bob', age: 25, role: 'Designer' },
    { name: 'Charlie', age: 35, role: 'Manager' }
  ];

  formFields: DynamicFormFieldConfig[] = [
    { key: 'username', label: 'Username', type: 'input-text', placeholder: 'Enter username', required: true },
    { key: 'age', label: 'Age', type: 'input-number', placeholder: 'Enter age' },
    { key: 'role', label: 'Role', type: 'select', options: [ { label: 'Developer', value: 'dev' }, { label: 'Designer', value: 'des' }, { label: 'Manager', value: 'mgr' } ] },
    { key: 'birthdate', label: 'Birthdate', type: 'date-picker' }
  ];

  submittedData: any = null;

  onFormSubmit(data: any) {
    this.submittedData = data;
  }
}
