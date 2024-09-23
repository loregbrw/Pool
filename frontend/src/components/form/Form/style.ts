import styled from "styled-components";
import { EColorPalette } from "../../../enums/EColorPalette";

export const StyledHeader = styled.header`

    display: none;

    @media (max-width: 1100px) {

        background-image: url('/BackgroundLogin.jpeg');
        background-position: center;
        background-size: cover;

        display: block;
        width: 100%;
        height: 60px;

        position: fixed;
        z-index: 1000;
    }
`
export const StyledBack = styled.img`
    position: absolute;
    left: 15px;
    top: 15px;

    height: 50px;
    cursor: pointer;

    @media (max-width: 1100px) {
        top: 75px;
    }
`

export const FormContainer = styled.div`
    display: flex;
    height: 100%;
    min-height: 100vh;
    width: 50%;
    padding: 140px 35px;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;

    position: relative;

    @media (max-width: 1100px) {
        width: 100%;
    }
`
export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    
    width: 100%;
    max-width: 400px;
`

export const TituleForm = styled.h1`
    font-size: 3rem;
`
export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
`

export const FormInput = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    width: 100%;
`

export const Label = styled.label`
`

export const Input = styled.input`
    padding: 10px;
    border-radius: 10px;
    width: 100%;
`
export const StyledObs = styled.a`
    width: 100%;
    text-align: right;

    font-weight: 600;
    text-decoration: underline;

    cursor: pointer;
    transition: 300ms;

    &:hover {
        color: ${EColorPalette.JETHOVER};
    }
`

export const Button = styled.button`
    font-size: 1.2rem;
    font-weight: 500;
    padding: 10px;
    border-radius: 10px;
    border: none;
    color: ${EColorPalette.MINTCREAM};
    background-color: ${EColorPalette.JET};
    width: 100%;

    cursor: pointer;
    transition: 300ms;

    &:hover {
        background-color: ${EColorPalette.JETHOVER};
    }
`