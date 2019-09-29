export interface ILoadable<T> {
  pending: boolean;
  error: any;
  value: T;
}
