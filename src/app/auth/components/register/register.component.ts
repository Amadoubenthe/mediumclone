import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectIsSubmitting } from '../../store/auth.reducer';
import { AuthState } from '../../store/auth.reducer';
import { CommonModule } from '@angular/common';
import { User } from '../../sevices/auth.service';
import { authActions } from '../../store/auth.actions';

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

  constructor(private store: Store<{ auth: AuthState }>) {}

  onSubmit() {
    const user: User = {
      ...this.form.value,
    } as User;

    this.store.dispatch(authActions.registerRequest(user));
  }
}
