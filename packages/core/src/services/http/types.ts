export interface ErrorResponse {
  code: string;
  message: string;
  details?: Record<string, any>;
}

export type ApiResponse<T> = T;
