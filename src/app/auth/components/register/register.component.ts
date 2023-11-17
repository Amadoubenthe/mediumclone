import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from '../../store/login-page.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [ReactiveFormsModule],
  standalone: true,
})
export class RegisterComponent {
  form = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private store: Store) {}

  onSubmit() {
    console.log(this.form.value);

    const username: string = this.form.value.userName as string;
    const password: string = this.form.value.password as string;

    this.store.dispatch(login({ username, password: password }));
  }
}
