export class SelectOption<K, V> {
  constructor(private key: K, private value: V | null) {}

  public getKey() {
    return this.key;
  }
  public getValue() {
    return this.value;
  }
}
