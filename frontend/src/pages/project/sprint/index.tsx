import { StyledAdd, StyledBg, StyledButton, StyledCard, StyledCardDes, StyledCardName, StyledColumn, StyledContent, StyledDiv, StyledEdit, StyledFooter, StyledImg, StyledName, StyledSection, StyledSections, StyledSpaceBetween, StyledSprint, StyledSprintName, StyledTag, StyledTags } from "./style"

import Options from "/Options.png"
import Menu from "/Menu.png"

interface ISprintProps {
    id: string;
}

export const Sprint = ({ id }: ISprintProps) => {

    return (
        <>
            <StyledSprint>
                <StyledBg>
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
                        <StyledName style={{ textAlign: "center" }}>SPRINT 1</StyledName>
                        <StyledCardDes style={{ textAlign: "center" }}>2° dia de 15 dias</StyledCardDes>
                    </StyledSprintName>
                    <StyledEdit src="/Next.png" />
                </StyledFooter>
            </StyledSprint>
        </>
    )
}