export type TColumnCreation = {
    name: string;
    index: number;
    sprintId: string;
}

export type TColumnUpdate = Partial<TColumnCreation>;