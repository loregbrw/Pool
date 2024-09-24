import { StyledAdd, StyledBg, StyledButton, StyledCard, StyledCardDes, StyledCardName, StyledColumn, StyledContent, StyledDiv, StyledEdit, StyledFooter, StyledImg, StyledName, StyledSection, StyledSections, StyledSpaceBetween, StyledSprint, StyledSprintName, StyledTag, StyledTags } from "./style"

import Options from "/Options.png"
import Menu from "/Menu.png"
import { useEffect, useState } from "react";
import { api } from "../../../service/api";
import { ISprint } from "..";
import { HeaderSprint } from "../headerSprint";

interface ISprintProps {
    id: string | null;
}

export const Sprint = ({ id }: ISprintProps) => {

    const [sprint, setSprint] = useState<ISprint | null>(null);

    useEffect(() => {
        const getSprint = async () => {
            if (!id) return

            try {
                const response = await api.get(`/sprints/${id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("Token")}`,
                    },
                });

                setSprint(response.data.sprint);

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
                    <HeaderSprint></HeaderSprint>
                    <StyledDiv>
                        <StyledColumn>
                            <StyledSpaceBetween>
                                <StyledName>Column Name</StyledName>
                                <StyledEdit src={Options} />
                            </StyledSpaceBetween>
                            <StyledButton>NOVO CARTÃO +</StyledButton>
                            <StyledContent>
                                <StyledSections>
                                    <StyledSection>
                                        <StyledCardName>Section Name</StyledCardName>
                                        <StyledCard>
                                            <StyledSpaceBetween>
                                                <StyledCardName>Card Name</StyledCardName>
                                                <StyledEdit style={{ height: "20px" }} src={Menu} />
                                            </StyledSpaceBetween>
                                            <StyledCardDes>Description description description description description description description</StyledCardDes>
                                            <StyledTags>
                                                <StyledTag>Pessoal</StyledTag>
                                                <StyledTag>Pessoal</StyledTag>
                                            </StyledTags>
                                            <StyledSpaceBetween>
                                                <StyledTags>
                                                    <StyledImg src="/User.png" />
                                                    <StyledImg src="/User.png" />
                                                    <StyledImg src="/User.png" />
                                                    <StyledCardName>+</StyledCardName>
                                                </StyledTags>
                                                <StyledTags>
                                                    xx/xx/xxxx
                                                    🔴🟢
                                                </StyledTags>
                                            </StyledSpaceBetween>
                                        </StyledCard>
                                    </StyledSection>
                                </StyledSections>
                            </StyledContent>
                        </StyledColumn>
                        <StyledAdd>
                            <StyledName style={{ textAlign: "center" }}>Adicionar Coluna +</StyledName>
                        </StyledAdd>
                    </StyledDiv>
                </StyledBg>
                <StyledFooter>
                    <StyledEdit style={{ rotate: "180deg" }} src="/Next.png" />
                    <StyledSprintName>
                        <StyledName style={{ textAlign: "center" }}>{sprint.name}</StyledName>
                        <StyledCardDes style={{ textAlign: "center" }}>
                            {Math.floor(Math.abs(new Date().getTime() - new Date(sprint.initialDate).getTime()) / (1000 * 60 * 60 * 24)) + 1}º dia de {sprint.duration} dia{sprint.duration > 1 ? "s" : ""}
                        </StyledCardDes>

                    </StyledSprintName>
                    <StyledEdit src="/Next.png" />
                </StyledFooter>
            </StyledSprint>
        </>
    )
}