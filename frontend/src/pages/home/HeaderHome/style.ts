import styled from "styled-components";
import { EColorPalette } from "../../../enums/EColorPalette";

export const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media (max-width: 860px) {
        flex-direction: column-reverse;
        align-items: flex-end;

        gap: 10px;
    }
`
export const ButtonsContainer = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`
export const SearchContainer = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: flex-end;

    width: 100%;
    max-width: 450px;
`

export const TagButton = styled.button`
    padding: 5px 20px;
    border-radius: 10px;
    border: none;

    height: 30px;
    background-color: ${EColorPalette.COOLGRAY};

    font-weight: 700;
    color: white;

    cursor: pointer;
    transition: 300ms;

    &:hover {
        filter: brightness(85%) saturate(125%);
    }
`

export const NewProjButton = styled.button`
    padding: 5px 20px;
    border-radius: 10px;
    border: none;

    height: 30px;
    background-color: ${EColorPalette.ENGINEERINGORANGE};
    font-weight: 700;
    color: white;

    cursor: pointer;
    transition: 300ms;

    &:hover {
        filter: brightness(85%) saturate(125%);
    }
`

export const StyledMenu = styled.img`
    height: 25px;

    cursor: pointer;
    transition: 300ms;

    &:hover {
        filter: brightness(85%) saturate(125%);
    }
` 

export const SelectTags = styled.select`
    border-radius: 10px;
    padding: 5px 20px;
    border: none;

    height: 30px;
    background-color: ${EColorPalette.COOLGRAY};
    font-weight: 700;
    color: white;
    
    cursor: pointer;
    transition: 300ms;

    width: 100%;
    max-width: fit-content;

    &:hover {
        filter: brightness(85%) saturate(125%);
    }
`

export const Input = styled.input`
    width: 100%;
    max-width: 250px;
    border-radius: 10px;
    padding: 5px;
    border: 2px ${EColorPalette.JET} solid;
`

export const SearchImg = styled.img`
    height: 25px;

    @media (max-width: 450px) {
        display: none;
    }
`
