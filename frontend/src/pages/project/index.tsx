import { useEffect, useState } from "react";
import { Sprint } from "./sprint"
import { api } from "../../service/api";

export interface ISprint {
    id: string;
    name: string;
    initialDate: Date;
    duration: number;
    status: boolean;
}

export interface IProject {
    project: {
        id: string;
        name: string;
        description: string;
        status: boolean;
        sprints: ISprint[];
    };
    permission: "Owner" | "Viewer" | "Editor"; 
}

export const Project = () => {

    const [sprint, setSprint] = useState<ISprint | null>(null);
    const [project, setProject] = useState<ISprint | null>(null);

    useEffect(() => {

        const getProject = async () => {

            try {
                const response = await api.get(`/projects/${}`)
            } catch (error) {
                
            }

        };

        getProject();

    }, []);

    return (
        <>
            <Sprint id={""} />
        </>
    )
}