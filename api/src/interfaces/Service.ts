export default interface Service<T, I> {
  create(obj: T): Promise<I>

  update(id: I, obj: T): Promise<boolean>
  'delete'(id: I): Promise<boolean>

  findById(id: I): Promise<T>
  findByName(name: I): Promise<T>
  findAll(): Promise<T[]>
}