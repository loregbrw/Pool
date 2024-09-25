export type TSectionCreation = {
    name: string;
    color: string;
    index: number;
    columnId: string;
}

export type TSectionUpdate = Partial<TSectionCreation>;