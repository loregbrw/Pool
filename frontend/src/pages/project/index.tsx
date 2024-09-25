import { useEffect, useState } from "react";
import { Sprint } from "./sprint"
import { api } from "../../service/api";
import { useParams } from "react-router-dom";

export interface ISprint {
    id: string;
    name: string;
    initialDate: Date;
    duration: number;
    status: boolean;
    columns?: IColumn[];
}

export interface IColumn {
    id: string;
    index: number;
    name: string;
    cards: ICard[],
    sections: []
}

export interface ICard {
    id: string;
    description: string;
    dueDate: Date;
    index: number;
    name: string;
    status: boolean;
    tags: [];
    users: [];
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

    const [sprint, setSprint] = useState<ISprint>();
    // const [project, setProject] = useState<IProject | null>(null);

    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        
        const getProject = async () => {
            try {
                const response = await api.get(`/projects/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("Token")}`,
                    }
                });

                const data = response.data?.project.project;

                // setProject(data);

                const filteredSprints = data?.sprints
                    .filter((sprint: ISprint) => !sprint.status)
                    .sort((a: ISprint, b: ISprint) => new Date(a.initialDate).getTime() - new Date(b.initialDate).getTime());

                if (filteredSprints && filteredSprints.length > 0)
                    setSprint(filteredSprints[0]);

            } catch (error) {
                console.log(error);
            }
        };

        getProject();

    }, [id]);


    return (
        <>
            <Sprint id={sprint?.id || null} />
        </>
    )
}