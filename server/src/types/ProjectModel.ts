export interface ProjectModel {
    name: string;
    createdAt: Date;
    id: string;
    category: string;
    budget: number;
    report: string;
    Location: string;
    imageURL: string
}

export interface TempType {
    contents: string
}