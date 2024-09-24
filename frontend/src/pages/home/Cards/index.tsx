import { useEffect, useState } from "react"
import { Card, CardColor, CardNotification, CardsContainer, Description, MorePeople, NameProject, PeopleGroup, PeopleImg, StyledTag } from "./style"
import { api } from "../../../service/api"
import { useNavigate } from "react-router-dom";

interface IProject {
    project: {
        id: string;
        name: string;
        description: string;
        status: boolean;
        tag: {
            id: string;
            name: string;
            color: string;
        }
    };
    status: "Own" | "Viewer" | "Editor";
}

interface ICardsProps {
    reload: boolean
}

export const Cards = ({ reload }: ICardsProps) => {

    const [projects, setProjects] = useState<IProject[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getProjects = async () => {

            try {
                const response = await api.get("/projects", {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("Token")}`,
                    }
                });

                setProjects(response.data.projects);
            } catch (error) {
                console.log(error);

                if (error.response.data.message) {
                    toast.error(error.response.data.message);
                    return;
                }

                toast.warning(error.message);
            }
        }

        getProjects();
    }, [reload])

    if (!projects.length) {
        return (
            <CardsContainer>
                Nenhum projeto!
            </CardsContainer>
        )
    }

    return (
        <>
            <CardsContainer>
                {
                    projects.map((project, index) => (
                        <Card onClick={() => navigate(`/project/${project.project.id}`)} key={index}>
                            <CardColor style={{ backgroundColor: project.project.tag.color }} >
                                <CardNotification />
                                <StyledTag>{project.project.tag.name}</StyledTag>
                            </CardColor>
                            <NameProject>{project.project.name}</NameProject>
                            <Description>{project.project.description}</Description>
                            <PeopleGroup>
                                <PeopleImg src="/Perfil.png" />
                                <PeopleImg src="/Perfil.png" />
                                <PeopleImg src="/Perfil.png" />
                                <MorePeople>+</MorePeople>
                            </PeopleGroup>
                        </Card>

                    ))
                }
            </CardsContainer>
        </>
    )
}