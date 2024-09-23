import React from "react";
import { IInput } from "../form";
import { Button, CloseButton, FormContainer, Input, Label, MiniModalContainer, Titulo } from "./styles"

    export interface IMiniModalProps {
        title: string;
        inputs: IInput[];
        closeAction: () => void;
        button: {
            name: string;
            action: (e: React.FormEvent) => void;
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
                                <Input onChange={(e) => input.onChange(e.target.value)} maxLength={255} type={input.type}/>
                            </FormContainer>    
                        ))
                    }
                <Button type="submit" onClick={button.action}>{button.name}</Button>
            </MiniModalContainer>
        </>
    )
}