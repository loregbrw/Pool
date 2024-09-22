import { IInput } from "../form";
import { Button, CloseButton, FormContainer, Input, Label, MiniModalContainer, Titulo } from "./styles"

    export interface IMiniModalProps {
        title: string;
        inputs: IInput[];
        closeAction: () => void;
        button: {
            name: string;
            action: () => void;
        }
    }

export const MiniModal = ({title, inputs, button, closeAction}: IMiniModalProps ) => {
    return(
        <>
            <MiniModalContainer>
                <CloseButton onClick={closeAction}>X</CloseButton>
                <Titulo>{title}</Titulo>
                    {
                        inputs.map((input, index) => (
                            <FormContainer key={index}>
                                <Label>{input.label}</Label>
                                <Input type={input.type}/>
                            </FormContainer>    
                        ))
                    }
                <Button type="button" onClick={button.action}>{button.name}</Button>
            </MiniModalContainer>
        </>
    )
}