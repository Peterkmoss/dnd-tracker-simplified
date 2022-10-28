export default interface Repository<T, I> {
  findAll(): Promise<T[]>
  findById(id: I): Promise<T>
  findByName(name: string): Promise<T>
  create(obj: T): Promise<I>
  remove(id: I): Promise<boolean>
  update(id: I, obj: T): Promise<boolean>
}