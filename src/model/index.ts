export interface ResourceInitial {
    isPending: false;
  }
  export interface ResourcePending {
    isPending: true;
  }
  export interface ResourceSuccess<T> {
    resource: T;
  }
  export interface ResourceFailure {
    errorMessage: string;
  }
  export type Resource<T> = ResourceInitial | ResourcePending | ResourceSuccess<T> | ResourceFailure;