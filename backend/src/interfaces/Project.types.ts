export type TProjectCreation = {
    name: string;
    description: string;
    tagId: string;
    users: string[];
    sprintInitalDate: Date;
    sprintDuration: number
};

type TProject = {
    name: string;
    description: string;
    tagId: string;
    users: string[]
} 

export type TProjectUpdate = Partial<TProject>; 