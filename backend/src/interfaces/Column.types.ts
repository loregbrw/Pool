export type TColumnCreation = {
    name: string;
    index: number;
    sprintId: string;
}

type TColumn = {
    name: string;
    index: string;
}

export type TColumnUpdate = Partial<TColumn>;