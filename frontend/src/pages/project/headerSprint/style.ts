import styled from "styled-components";
import { EColorPalette } from "../../../enums/EColorPalette";

export const StyledHeader = styled.header`
    top: 65px;
    left: 0;
    width: 100%;
    height: 60px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 10px 35px;
    position: fixed;

`

export const StyledIcon = styled.img`
    height: 30px;

    cursor: pointer;
    transition: 300ms;

    &:hover {
        filter: brightness(75%) saturate(125%);
    }
`

export const StyledDiv = styled.div`
    display: flex;

    align-items: center;
    gap: 10px;

    height: 100%;
`

export const StyledButton = styled.button`
    height: 100%;

    border: none;
    padding: 5px 20px;

    border-radius: 10px;

    font-weight: 600;

    color: ${EColorPalette.MINTCREAM};
    background-color: ${EColorPalette.ENGINEERINGORANGE};

    cursor: pointer;
    transition: 300ms;

    &:hover {
        filter: brightness(75%) saturate(125%);
    }
`

export const StyledBox = styled.div`
    height: 100%;
    display: flex;

    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    @media (max-width: 800px) {
        display: none;
    }
`

export const StyledBar = styled.div`
    width: 250px;

    height: 10px;
    background-color: ${EColorPalette.COOLGRAY};

    border-radius: 10px;
`

export const StyledProgress = styled.div`
    height: 10px;
    background-color: ${EColorPalette.JET};    
    border-radius: 10px;
`;
