
export interface TempType {
    contents: string
}


export type Project<T> = {
    name: string,
    ownerAddress: string,
    contents: T
}
