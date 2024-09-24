import { StyledAdd, StyledBg, StyledButton, StyledCardDes, StyledColumn, StyledConfirm, StyledContent, StyledDiv, StyledEdit, StyledFooter, StyledName, StyledNameInput, StyledSections, StyledSpaceBetween, StyledSprint, StyledSprintName } from "./style"

import Options from "/Options.png"
import { useEffect, useState } from "react";
import { api } from "../../../service/api";
import { ISprint } from "..";
import { HeaderSprint } from "../headerSprint";
import Confirm from "/Confirm.png";
// import { Section } from "./section";
import { Card } from "./card";

interface ISprintProps {
    id: string | null;
}


export const Sprint = ({ id }: ISprintProps) => {

    const [sprintName, setSprintName] = useState("");
    const [sprint, setSprint] = useState<ISprint | null>(null);
    const [editingSprint, setEditingSprint] = useState(false);

    useEffect(() => {
        const getSprint = async () => {
            if (!id) return

            console.log("id: " + id)

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
    }, [id]);

    if (!sprint) {
        return (
            <>
                <StyledSprint>
                    Carregando Sprint...
                </StyledSprint>
            </>
        )
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
                                <StyledColumn key={index}>
                                    <StyledSpaceBetween>
                                        <StyledName>{column.name}</StyledName>
                                        <StyledEdit src={Options} />
                                    </StyledSpaceBetween>
                                    <StyledButton>NOVO CARTÃO +</StyledButton>
                                    <StyledContent>
                                        <StyledSections>
                                            {
                                                column.cards.map((card, index) => (
                                                    <Card key={index} id={card.id} />
                                                ))
                                            }
                                        </StyledSections>
                                        {/* <StyledSections>
                                            <Section id={""} />
                                        </StyledSections> */}
                                    </StyledContent>
                                </StyledColumn>
                            ))
                        }
                        <StyledAdd>
                            <StyledName style={{ textAlign: "center" }}>Adicionar Coluna +</StyledName>
                        </StyledAdd>
                    </StyledDiv>
                </StyledBg>
                <StyledFooter>
                    <StyledEdit style={{ rotate: "180deg" }} src="/Next.png" />
                    {
                        !editingSprint &&
                        <StyledSprintName onClick={() => setEditingSprint(true)}>
                            <StyledName style={{ textAlign: "center" }}>{sprint.name}</StyledName>
                            <StyledCardDes style={{ textAlign: "center" }}>
                                {Math.floor(Math.abs(new Date().getTime() - new Date(sprint.initialDate).getTime()) / (1000 * 60 * 60 * 24)) + 1}º dia de {sprint.duration} dia{sprint.duration > 1 ? "s" : ""}
                            </StyledCardDes>
                        </StyledSprintName>
                    }
                    {
                        editingSprint &&
                        <StyledSprintName onClick={() => setEditingSprint(true)}>
                            <form>
                                <StyledNameInput type="text" style={{ textAlign: "center" }} value={sprintName} onChange={(e) => setSprintName(e.target.value)} />
                                <StyledConfirm />
                            </form>
                            <StyledCardDes style={{ textAlign: "center" }}>
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