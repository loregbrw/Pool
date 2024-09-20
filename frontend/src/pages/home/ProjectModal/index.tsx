import { Button, CloseButton, Datecontainer, Description, FormContainer, Input, InputContainer, Label, ProjectModalContainer, SelectPeople, SelectTag, Titulo, TopContainer } from "./style"

export interface IProjModalProps {
    closeAction: () => void;
    button:() => void;
}

export const ProjectModal = ({closeAction, button}: IProjModalProps) => {
    return (
        <>
            <ProjectModalContainer>
                <CloseButton onClick={closeAction}>X</CloseButton>
                <Titulo>NOVO PROJETO</Titulo>
                <FormContainer>
                    <TopContainer>
                        <InputContainer >
                            <Label>Nome:</Label>
                            <Input  type="text"/>
                        </InputContainer>
                        <InputContainer style={{ width: "60%" }}>
                            <Label>tag:</Label>
                            <SelectTag></SelectTag>
                        </InputContainer>
                    </TopContainer>
                    <InputContainer>
                        <Label>Descrição:</Label>
                        <Description/>
                    </InputContainer>
                    <InputContainer>
                        <Label>Participantes:</Label>
                        <SelectPeople/>
                    </InputContainer>
                    <Datecontainer>
                        <InputContainer>
                            <Label>Data Inicial:</Label>
                            <Input type="date"/>
                        </InputContainer>
                        <InputContainer>
                            <Label>Duração da primeira Sprint:</Label>
                            <Input type="date"/>
                        </InputContainer>
                    </Datecontainer>
                </FormContainer>
                <Button type="button" onClick={button}>CRIAR</Button>
            </ProjectModalContainer>
        </>
    )
}