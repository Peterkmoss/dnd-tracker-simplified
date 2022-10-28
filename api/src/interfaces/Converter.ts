export default interface Converter<T, D> {
  serialize(obj: T): D
  deserialize(obj: any): T
}