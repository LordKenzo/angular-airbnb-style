import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  isValidInput(form: FormGroup, inputValue): boolean {
    const res = form.controls[inputValue].valid &&
    (!form.controls[inputValue].dirty || form.controls[inputValue].touched);
    return res;
  }

  isFieldValid(form: FormGroup, field: string) {
    return form.get(field).valid && (
      form.get(field).touched || !this.isDirty(form, field));
  }

  isTouched(form: FormGroup, field: string) {
    return form.get(field).touched;
  }

  isPristine(form: FormGroup, field: string) {
    return form.get(field).pristine;
  }

  isDirty(form: FormGroup, field: string) {
    return form.get(field).dirty;
  }

  isRequired(form: FormGroup, inputValue): boolean {
    return form.controls[inputValue].errors.required;
  }
}
