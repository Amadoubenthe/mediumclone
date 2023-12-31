import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  selectIsSubmitting,
  selectValidationErrors,
} from '../../store/auth.reducer';
import { CommonModule } from '@angular/common';
import { authActions } from '../../store/auth.actions';
import { UserRequest } from 'src/app/shared/types/user-request';
import { AuthState } from 'src/app/shared/types/auth-state';
import { combineLatest } from 'rxjs';
import { BackenErrors } from 'src/app/shared/types/backen-errors';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,
})
export class RegisterComponent {
  form = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  isSubmitting$ = this.store.select(selectIsSubmitting);
  backendErrors$ = this.store.select(selectValidationErrors);

  data$ = combineLatest({
    isSubmitting$: this.store.select(selectIsSubmitting),
    backendErrors$: this.store.select(selectValidationErrors),
  });

  constructor(private store: Store<{ auth: AuthState }>) {}

  onSubmit() {
    const user: UserRequest = {
      email: this.form.value.email as string,
      firstName: this.form.value.userName as string,
      lastName: 'Amadou',
      password: this.form.value.password as string,
      phone: '0584108716',
      roleId: 1,
    };

    this.store.dispatch(authActions.registerRequest(user));
    this.getMessageError();
  }

  getMessageError(): string {
    let message!: string;
    this.backendErrors$.pipe().subscribe((err: BackenErrors | null) => {
      if (err != null) {
        message = err['message'];
      }
    });

    return message;
  }
}
