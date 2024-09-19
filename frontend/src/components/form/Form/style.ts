import styled from "styled-components";
import { EColorPalette } from "../../../enums/EColorPalette";

export const FormContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 50vw;
    padding: 35px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;

`
export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    width: min(100%,500px);

`

export const TituleForm = styled.h1`
    font-size: 4rem;
`
export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    height: 100%;
`

export const FormInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`

export const Label = styled.label`
    font-size: 1.2rem;
`

export const Input = styled.input`
    padding: 10px;
    border-radius: 10px;
    font-size: 15px;
    width: 100%;
`
export const FGPassword = styled.a`
    width: 100%;
    text-align: right;
`

export const Button = styled.button`
    font-size: 1.5rem;
    padding: 10px;
    border-radius: 10px;
    border: none;
    color: white;
    background-color: ${EColorPalette.JET};
    width: 100%;
`