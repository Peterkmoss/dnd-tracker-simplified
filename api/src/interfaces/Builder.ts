export default interface Builder<T> {
  validate(): void
  build(): T
}