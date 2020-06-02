export interface IRepository<T> {
    getById(id: string): Promise<T>;
    // ...
}