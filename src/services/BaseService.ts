export abstract class BaseService<T> {
    dataList: T[] = []

    abstract create(model: T): number
    abstract get(id: number): void
    abstract delete(id: number): void
    abstract update(model: T): void

}