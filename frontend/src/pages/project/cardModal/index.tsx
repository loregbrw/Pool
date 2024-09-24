import { EColorPalette } from "../../../enums/EColorPalette"
import { BackContainer, Button, CloseButton, CreateCardModal, Description, FormContainer, Input, InputContainer, Label, StyledSelect, Titulo } from "./style"

export const CardModal = () => {
    return(
        <>
            <CreateCardModal>
                <CloseButton>X</CloseButton>
                <Titulo>Novo Card</Titulo>
                <FormContainer>
                    <InputContainer>
                        <Label>Nome:</Label>
                        <Input/>
                    </InputContainer>
                    <InputContainer>
                        <Label>Descrição:</Label>
                        <Description/>
                    </InputContainer>
                    <InputContainer>
                        <Label>Participantes:</Label>
                        <StyledSelect>
                            <option value="">Selecionar</option>
                        </StyledSelect>
                    </InputContainer>
                    <BackContainer>
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
                        <InputContainer>
                            <Label>Data de Entrega:</Label>
                            <Input type="date" required />
                        </InputContainer>
                    </BackContainer>
                    <Button type="submit">Criar</Button>
                </FormContainer>
            </CreateCardModal>
        </>
    )
}