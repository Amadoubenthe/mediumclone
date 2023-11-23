import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { register } from '../../store/login-page.actions';
import { selectIsSubmitting } from '../../store/auth.reducer';
import { AuthState } from '../../store/auth.reducer';
import { CommonModule } from '@angular/common';
import { AuthService, User } from '../../sevices/auth.service';

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

  constructor(
    private store: Store<{ auth: AuthState }>,
    private authService: AuthService
  ) {}

  onSubmit() {
    console.log(this.form.value);

    const username: string = this.form.value.userName as string;
    const password: string = this.form.value.password as string;

    const user: User = {
      ...this.form.value,
    } as User;

    this.store.dispatch(register({ username, password: password }));
    this.authService.register(user).subscribe((user) => {
      console.log(user);
    });
  }
}
