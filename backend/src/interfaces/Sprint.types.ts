export type TSprintCreation = {
    name: string;
    initialDate: Date;
    duration: number;
    projectId: string
}

type TSprint = {
    name: string;
    initialDate: Date;
    duration: number;
    status: boolean;
}

export type TSprintUpdate = Partial<TSprint>;
