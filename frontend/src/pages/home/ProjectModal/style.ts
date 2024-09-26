import styled from "styled-components";
import { EColorPalette } from "../../../enums/EColorPalette";

export const ProjectModalContainer = styled.div`
    width: calc(100% - 75px);
    max-width: 800px;
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 1000;
    background-color: ${EColorPalette.MINTCREAM};
    padding: 30px;
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
`
export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
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

    height: 30px;
`
export const Datecontainer = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
`
export const TopContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 15px;
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
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