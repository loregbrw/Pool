import styled from "styled-components";
import { EColorPalette } from "../../../enums/EColorPalette";

export const HeaderContainer = styled.div`
    display: flex;
    height: 60px;
    width: 100%;
    justify-content: space-between;
    padding: 15px;
`
export const ButtonsContainer = styled.div`
    display: flex;
    gap: 20px;
`
export const SearchContainer = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
`

export const TagButton = styled.button`
    padding: 5px 20px;
    border-radius: 10px;
    border: none;
    background-color: ${EColorPalette.COOLGRAY};
    font-weight: 700;
    color: white;
`

export const NewProjButton = styled.button`
    padding: 5px 20px;
    border-radius: 10px;
    border: none;
    background-color: ${EColorPalette.ENGINEERINGORANGE};
    font-weight: 700;
    color: white;
`
export const SelectTags = styled.select`
    border-radius: 10px;
    padding: 5px 20px;
    border: none;
    background-color: ${EColorPalette.COOLGRAY};
    font-weight: 700;
    color: white;
`

export const Input = styled.input`
    width: 250px;
    border-radius: 10px;
    padding: 5px;
    border: 2px ${EColorPalette.JET} solid;
`

export const SearchImg = styled.img`
    height: 20px;
    
`
