export class UniqueKey {
  public static newKey(): string {
    return new Date().getTime().toString()
  }
}
