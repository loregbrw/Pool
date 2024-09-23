import styled from "styled-components";
import { EColorPalette } from "../../enums/EColorPalette";

export const MiniModalContainer = styled.form`
    width: 100%;
    max-width: 300px;
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 1000;
    background-color: ${EColorPalette.MINTCREAM};
    padding: 25px;
    border-radius: 10px;
    border: 2px ${EColorPalette.JET} solid;
    gap: 15px;
    align-items: center;
`
export const CloseButton = styled.button`
    border: none;
    font-weight: 700;
    display: flex;
    right: 10px;
    top: 10px;
    position: absolute;

    cursor: pointer;
`
export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
export const Titulo = styled.h2`
    text-align: center;
`
export const Label = styled.label`
    font-weight: 500;
`
export const Input = styled.input`
    width: 100%;
    padding: 3px 5px;
    background-color: ${EColorPalette.FRENCHGRAY} ;
    border: none;
    border-radius: 5px;
    outline: none;
    
`
export const Button = styled.button`
    width: 100%;
    padding: 5px;
    border: 1px ${EColorPalette.JET} solid;
    border-radius: 5px;
    background-color: ${EColorPalette.BURNTSIENNA};
    border: none;
    color: white;
    font-weight: 700;

    cursor: pointer;
    transition: 300ms;

    &:hover {
        filter: brightness(85%) saturate(125%);
    }
`