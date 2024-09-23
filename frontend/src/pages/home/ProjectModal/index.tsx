import React, { useEffect, useState } from "react";
import { Button, CloseButton, Datecontainer, Description, FormContainer, Input, InputContainer, Label, ProjectModalContainer, StyledSelect, Titulo, TopContainer } from "./style"
import { toast } from "react-toastify";
import { ITag } from "../HeaderHome";
import { api } from "../../../service/api";
import { EColorPalette } from "../../../enums/EColorPalette";

export interface IProjModalProps {
    closeAction: () => void;
}

export const ProjectModal = ({ closeAction }: IProjModalProps) => {

    const [tags, setTags] = useState<ITag[]>([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [tagId, setTagId] = useState("");
    const [initialDate, setInitialDate] = useState<Date | null>(null);
    const [duration, setDuration] = useState(0);

    useEffect(() => {

        const getTags = async () => {
            try {
                const response = await api.get("/tags", {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("Token")}`,
                    }
                });

                setTags(response.data.tags);
            } catch (error) {
                console.log(error);

                if (error.response.data.message) {
                    toast.error(error.response.data.message);
                    return;
                }

                toast.warning(error.message);
            }

        }

        getTags();

    }, [])

    const createProject = async (e: React.FormEvent) => {
        e.preventDefault();

        try {

            const response = await api.post("/projects",
                {
                    name: name,
                    description: description,
                    tagId: tagId,
                    users: [],
                    sprintInitialDate: initialDate,
                    sprintDuration: duration
                },
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("Token")}`,
                    }
                }
            )

            toast.success("Projeto criado com sucesso!");
            closeAction();

        } catch (error) {
            console.log(error);

            if (error.response.data.message) {
                toast.error(error.response.data.message);
                return;
            }

            toast.warning(error.message);
        }
    }

    return (
        <>
            <ProjectModalContainer>
                <CloseButton onClick={closeAction}>X</CloseButton>
                <Titulo>NOVO PROJETO</Titulo>
                <FormContainer onSubmit={createProject}>
                    <TopContainer>
                        <InputContainer >
                            <Label>Nome:</Label>
                            <Input type="text" onChange={(e) => setName(e.target.value)} maxLength={255} required />
                        </InputContainer>
                        <InputContainer style={{ width: "60%" }}>
                            <Label>tag:</Label>
                            <StyledSelect onChange={(e) => setTagId(e.target.value)}>
                                <option style={{ color: EColorPalette.MINTCREAM }} value="">Selecionar</option>
                                {
                                    tags.map((tag, index) => (
                                        <option style={{ backgroundColor: tag.color, color: EColorPalette.MINTCREAM }} value={tag.id} key={index}>{tag.name}</option>
                                    ))
                                }
                            </StyledSelect>
                        </InputContainer>
                    </TopContainer>
                    <InputContainer>
                        <Label>Descrição:</Label>
                        <Description onChange={(e) => setDescription(e.target.value)} maxLength={500} required />
                    </InputContainer>
                    <InputContainer>
                        <Label>Participantes:</Label>
                        <StyledSelect>
                            <option value="">Selecionar</option>
                        </StyledSelect>
                    </InputContainer>
                    <Datecontainer>
                        <InputContainer>
                            <Label>Data Inicial:</Label>
                            <Input onChange={(e) => setInitialDate(new Date(e.target.value))} type="date" required />
                        </InputContainer>
                        <InputContainer>
                            <Label>Duração da primeira Sprint:</Label>
                            <Input onChange={(e) => setDuration(Number(e.target.value))} placeholder="Duração em dias" min={0} type="number" required />
                        </InputContainer>
                    </Datecontainer>
                    <Button type="submit">Criar projeto</Button>
                </FormContainer>
            </ProjectModalContainer>
        </>
    )
}