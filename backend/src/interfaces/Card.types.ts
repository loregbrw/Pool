export type TCardCreation = {
    name: string;
    description: string; // 1000
    dueDate: Date;
    status: boolean;
    index: number;
    sectionId?: string;
    columnId?: string;
    tagsId: string[];
}