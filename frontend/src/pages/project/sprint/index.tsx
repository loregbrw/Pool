import { StyledAdd, StyledBg, StyledCardDes,StyledConfirm, StyledDiv, StyledEdit, StyledFooter, StyledName, StyledNameInput, StyledSprint, StyledSprintName } from "./style"

import React, { useEffect, useState } from "react";
import { api } from "../../../service/api";
import { ISprint } from "..";
import { HeaderSprint } from "../headerSprint";
// import { Section } from "./section";
import { toast } from "react-toastify";
import { Column } from "./column";

interface ISprintProps {
    id: string | null;
}


export const Sprint = ({ id }: ISprintProps) => {

    const [sprintName, setSprintName] = useState("");
    const [sprint, setSprint] = useState<ISprint | null>(null);
    const [editingSprint, setEditingSprint] = useState(false);
    const [change, setChange] = useState(false);

    const addColumn = async () => {
        try {
            const response = await api.post(`/columns`,
                {
                    name: "Nova Coluna",
                    index: sprint?.columns?.length,
                    sprintId: sprint?.id
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("Token")}`,
                    },
                });

                setChange(!change);
            toast.success("Coluna adicionada!");
        } catch (error) {
            console.log(error);
            toast.error("Erro ao adicionar coluna!");
        }
    }

    const addCard = async (columnId: string, len: number) => {
        try {
            const response = await api.post(`/cards`,
                {
                    name: "Novo card",
                    description: "",
                    status: false,
                    index: len + 1,
                    columnId: columnId,
                    tagsId: []
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("Token")}`,
                    },
                });

                setChange(!change);
            toast.success("Cartão criado!");
        } catch (error) {
            console.log(error);
            toast.error("Erro ao adicionar cartão!");
        }
    }

    const editSprintName = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await api.patch(`/sprints/${id}`,
                {
                    name: sprintName
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("Token")}`,
                    },
                });

        } catch (error) {
            toast.error("Erro ao alterar sprint!");
        }

        setChange(!change);
        setEditingSprint(false);
    }
    
    useEffect(() => {
        const getSprint = async () => {
            if (!id) return;
            
            console.log("id: " + id);
            
            try {
                const response = await api.get(`/sprints/${id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("Token")}`,
                    },
                });

                setSprint(response.data.sprint);
                setSprintName(response.data.sprint.name);
            } catch (error) {
                console.log(error);
            }
        };
        
        getSprint();
    }, [id, change]);

    if (!sprint) {
        return (
            <>
                <StyledSprint>
                    Carregando Sprint...
                </StyledSprint>
            </>
        )
    }
    
    const openEditName = () => {
        
        setSprintName(sprint?.name);
        setEditingSprint(true);
    }

    return (
        <>
            <StyledSprint>
                <StyledBg>
                    <HeaderSprint
                        timeProgress={(Math.floor(Math.abs(new Date().getTime() - new Date(sprint.initialDate).getTime()) / (1000 * 60 * 60 * 24)) + 1) / sprint.duration} tasksProgress={0} />
                    <StyledDiv>
                        {
                            sprint.columns?.sort((a, b) => a.index - b.index).map((column, index) => (
                                <Column setChange={setChange} column={column} index={index} addCard={addCard} change={change}/>
                            ))
                        }
                        <StyledAdd onClick={addColumn}>
                            <StyledName style={{ textAlign: "center" }}>Adicionar Coluna +</StyledName>
                        </StyledAdd>
                    </StyledDiv>
                </StyledBg>
                <StyledFooter>
                    <StyledEdit style={{ rotate: "180deg" }} src="/Next.png" />
                    {
                        !editingSprint &&
                        <StyledSprintName onClick={openEditName}>
                            <StyledName style={{ textAlign: "center" }}>{sprint.name}</StyledName>
                            <StyledCardDes style={{ textAlign: "center" }}>
                                {Math.floor(Math.abs(new Date().getTime() - new Date(sprint.initialDate).getTime()) / (1000 * 60 * 60 * 24)) + 1}º dia de {sprint.duration} dia{sprint.duration > 1 ? "s" : ""}
                            </StyledCardDes>
                        </StyledSprintName>
                    }
                    {
                        editingSprint &&
                        <StyledSprintName>
                            <form onSubmit={editSprintName}>
                                <StyledNameInput onBlur={() => setEditingSprint(false)} type="text" style={{ textAlign: "center" }} value={sprintName} onChange={(e) => setSprintName(e.target.value)} />
                                <StyledConfirm type="submit" />
                            </form>
                            <StyledCardDes  onClick={() => setEditingSprint(false)} style={{ textAlign: "center" }}>
                                {Math.floor(Math.abs(new Date().getTime() - new Date(sprint.initialDate).getTime()) / (1000 * 60 * 60 * 24)) + 1}º dia de {sprint.duration} dia{sprint.duration > 1 ? "s" : ""}
                            </StyledCardDes>
                        </StyledSprintName>
                    }

                    <StyledEdit src="/Next.png" />
                </StyledFooter>
            </StyledSprint>
        </>
    )
}