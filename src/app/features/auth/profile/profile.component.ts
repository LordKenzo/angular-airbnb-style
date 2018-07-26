import { Component, OnInit, isDevMode } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { AuthService } from './../../../core/auth/auth.service';
import { FormService } from '../../../shared/form/form.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  private profile;
  private profileForm: FormGroup;
  private errors: any[] = [];
  private notifyMessage = '';

  constructor(private formBuilder: FormBuilder,
    private formService: FormService,
    private authService: AuthService) {
   }

  ngOnInit() {
    this.initForm();
    this.profile = this.authService.getUserData();
    console.log(this.profile);
  }

  initForm() {
    /*this.profileForm = new FormGroup( this.fb.group({
      email: [this.authService.getUserField('email'), [Validators.required,
          Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
      currentPassword: [null, Validators.required],
      newPassword: [],
      confirmPassword: [],
      userLevel: [this.authService.getUserField('level')]

    }).controls, {updateOn: 'submit'});*/
    this.profileForm = this.formBuilder.group({
      email: [this.authService.getUserField('email'), [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')
      ]],
      currentPassword: [null, Validators.required],
      newPassword: [null],
      confirmPassword: [null],
      level: [this.authService.getUserField('level')]
    }, {validator: this.checkConfirmPassword});
  }

  checkConfirmPassword(control: AbstractControl): { [key: string]: boolean } | null {
    const newPassword = control.get('newPassword').value;
    const confirmPassword = control.get('confirmPassword').value;
    console.log(newPassword, confirmPassword);
    if ( (newPassword || confirmPassword) && (newPassword !== confirmPassword)) {
      return {
        'confirmPassword': true
      };
    }
    return null;
}

  isValidInput(inputValue): boolean {
    return this.formService.isValidInput(this.profileForm, inputValue);
  }

  isFieldValid(field: string) {
    return this.formService.isFieldValid(this.profileForm, field);
  }

  isTouched(field) {
    return this.formService.isTouched(this.profileForm, field);
  }

  isPristine(field) {
    return this.formService.isPristine(this.profileForm, field);
  }

  isRequired(inputValue): boolean {
    return this.formService.isRequired(this.profileForm, inputValue);
  }

  displayFieldCss(field: string) {
    return {
      'invalid-feedback': !this.isFieldValid(field),
      'valid-feedback': this.isFieldValid(field)
    };
  }

  isDevMode() {
    return isDevMode();
  }

  save() {
    if (this.profileForm.valid) {
      console.log('save', this.profileForm.value);
      this.authService.update(this.profileForm.value).subscribe(
        (data) => {
          this.profile = this.authService.getUserData();
          this.profileForm.reset({
            email: this.profile.email,
            level: this.profile.level
          });
          this.notifyMessage = 'You have succesfully update your profile';
        },
        (err) => {
          this.errors = [];
          if (!Array.isArray(err.error.errors)) {
            this.errors.push({description: err.message});
          } else {
            this.errors = err.error.errors;
          }
        }
      );
    } else {
      // validate all form fields
    }

  }

}
