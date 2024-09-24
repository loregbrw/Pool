import styled from "styled-components";
import { EColorPalette } from "../../../enums/EColorPalette";

export const CreateCardModal = styled.div`
`
export const CloseButton = styled.button`
`
export const Titulo = styled.h2`
    text-align: center;
`

export const FormContainer = styled.form`
`

export const Label = styled.label`
`

export const Input = styled.input`
`

export const InputContainer = styled.div`
`
export const BackContainer = styled.div`
`

export const Description = styled.textarea`
    width: 100%;
    padding: 3px 5px;
    background-color: ${EColorPalette.FRENCHGRAY} ;
    border: none;
    border-radius: 5px;

    height: 100px;
`


export const StyledSelect = styled.select`
    padding: 3px 5px;
    background-color: ${EColorPalette.FRENCHGRAY} ;
    border: none;
    border-radius: 5px;

    height: 30px;
`
export const Button = styled.button`
    width: 100%;
    padding: 7px;
    border: 1px ${EColorPalette.JET} solid;
    border-radius: 5px;
    background-color: ${EColorPalette.BURNTSIENNA};
    border: none;
    color: white;
    font-weight: 700;

    margin-top: 15px;

    cursor: pointer;
    transition: 300ms;

    &:hover {
        filter: brightness(85%) saturate(125%);
    }
`