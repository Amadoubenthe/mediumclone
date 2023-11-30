import { BackenErrors } from './backen-errors';

export interface AuthState {
  isSubmitting: boolean;
  token: string | null | undefined;
  isLoading: boolean;
  validationErrors: BackenErrors | null;
}
