import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { UserRequest } from 'src/app/shared/types/user-request';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(credentials: UserRequest): Observable<{ message: string }> {
    return this.http
      .post<{ message: string }>(environment.apiUrl + '/users', credentials)
      .pipe(map((response) => response));
  }
}
