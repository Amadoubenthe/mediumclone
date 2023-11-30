import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { BackenErrors } from './backen-errors';
import { Token } from '@angular/compiler';
import { CreatedSuccessMessage } from './created-success-message';

export interface AuthState {
  isSubmitting: boolean;
  message: CreatedSuccessMessage | null | undefined;
  isLoading: boolean;
  validationErrors: BackenErrors | null;
}
