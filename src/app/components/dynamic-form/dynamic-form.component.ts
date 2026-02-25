import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicFormFieldConfig } from './dynamic-form-field-config';
// ...existing code...
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, JsonPipe]
})

export class DynamicFormComponent {
  @Input() fields: DynamicFormFieldConfig[] = [];
  @Output() formSubmit = new EventEmitter<any>();
  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  ngOnChanges() {
    this.buildForm();
  }

  buildForm() {
    const group: any = {};
    this.fields.forEach(field => {
      group[field.key] = field.required ? [null, Validators.required] : [null];
    });
    this.form = this.fb.group(group);
  }

  submit() {
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);
    }
  }
}
