export class BaseModel<T, I> {
  public success: boolean
  public data: T | null
  public error: {
    code: I | null;
    message: string | null;
  } | null
}
