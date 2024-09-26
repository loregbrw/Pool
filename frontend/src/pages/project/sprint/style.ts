import styled from "styled-components";
import { EColorPalette } from "../../../enums/EColorPalette";

export const StyledSprint = styled.div`
    height: 100vh;
    width: 100%;
`

export const StyledFooter = styled.footer`
    border-top: solid 2px ${EColorPalette.JET};

    height: 70px;
    width: 100%;

    background-color: ${EColorPalette.MINTCREAM};

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`

export const StyledBg = styled.div`
    background-color: ${EColorPalette.FRENCHGRAY};

    height: calc(100% - 70px);
    width: 100%;

    padding: 130px 35px 35px 35px;

    display: block;

    overflow-x: auto;
    white-space: nowrap;

    &::-webkit-scrollbar {
        background-color: ${EColorPalette.JET};

        height: 15px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${EColorPalette.COOLGRAY};
        border-radius: 15px;

        border: solid ${EColorPalette.JET} 3px;
    }
`

export const StyledDiv = styled.div`
    display: flex;
    width: fit-content;

    gap: 30px;
`

export const StyledColumn = styled.div`
    width: 350px;
    
    height: fit-content;
    
    background-color: ${EColorPalette.COOLGRAY};
    border-radius: 10px;

    padding: 15px;

    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const StyledContent = styled.div`
    height: fit-content;
    max-height: calc(100vh - 365px);
    width: 100%;

    overflow-y: auto;
    white-space: nowrap;

    &::-webkit-scrollbar {
        background-color: ${EColorPalette.JET};
        width: 10px;

        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${EColorPalette.COOLGRAY};
        border-radius: 15px;

        border: solid ${EColorPalette.JET} 2px;
    }
`

export const StyledSections = styled.div`
    display: flex;
    flex-direction: column;

    gap: 10px;
    width: 100%;
`

export const StyledName = styled.span`
    font-size: 1.2rem;
    font-weight: 700;

    cursor: pointer;
    transition: 300ms;

    &:hover {
        filter: brightness(75%) saturate(125%);
    }
`

export const StyledNameInput = styled.input`
    font-size: 1.2rem;
    font-weight: 700;

    border: none;
    background-color: transparent;

    border-bottom: 2px solid ${EColorPalette.JET};
    outline: none;
`

export const StyledConfirm = styled.button`
    position: absolute;

    background: url("/Confirm.png");

    background-size: contain;

    height: 30px;
    width: 30px;

    border: none;
    cursor: pointer;
    transition: 300ms;

    &:hover {
        filter: brightness(85%) saturate(125%);
    }
`

export const StyledButton = styled.button`
    width: 100%;

    border: none;
    background-color: ${EColorPalette.BURNTSIENNA};
    
    height: 30px;
    color: ${EColorPalette.MINTCREAM};

    border-radius: 5px;
    font-weight: 600;

    cursor: pointer;
    transition: 300ms;

    &:hover {
        filter: brightness(85%) saturate(125%);
    }
`

export const StyledSection = styled.div`
    background-color: ${EColorPalette.FRENCHGRAY};
    width: 100%;
    height: fit-content;

    border-radius: 10px;

    display: flex;
    flex-direction: column;

    padding: 10px;

    gap: 10px;
`

export const StyledSpaceBetween = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
`

export const StyledEdit = styled.img`
    height: 25px;

    cursor: pointer;
    transition: 300ms;

    &:hover {
        filter: brightness(85%) saturate(125%);
    }

`

export const StyledCard = styled.div`
    width: 100%;
    border-radius: 5px;

    background-color: ${EColorPalette.MINTCREAM};

    display: flex;
    flex-direction: column;

    justify-content: space-between;

    padding: 10px;
    gap: 10px;

    cursor: pointer;
    transition: 300ms;

    -webkit-box-shadow: 0px 5px 7.5px 0px rgba(51,49,56,0.5);
    -moz-box-shadow: 0px 5px 7.5px 0px rgba(51,49,56,0.5);
    box-shadow: 0px 5px 7.5px 0px rgba(51,49,56,0.5);

    &:hover {
        filter: brightness(90%) saturate(110%);
    }
`

export const StyledCardName = styled.span`
    font-weight: 700;

    overflow: hidden;                
    text-overflow: ellipsis;
`

export const StyledCardDes = styled.span`
    text-align: justify;
    font-size: 0.8rem;
    
    display: -webkit-box;            
    -webkit-line-clamp: 3;           
    -webkit-box-orient: vertical;   
    
    overflow: hidden;                
    text-overflow: ellipsis;

    width: 100%;

`

export const StyledTags = styled.div`
    display: flex;
    flex-wrap: wrap;

    align-items: center;
    gap: 5px;

    width: fit-content;
    max-width: 100%;
`
export const StyledDate = styled.span`
    font-size: 0.8rem;
    font-weight: 700;

    display: flex;
    align-items: flex-end;

    height: 25px;;
`

export const StyledTag = styled.div`
    background-color: blue;
    color: ${EColorPalette.MINTCREAM};

    padding: 3px 10px;

    font-size: 0.8rem;
    font-weight: 500;

    border-radius: 5px;
`

export const StyledImg = styled.img`
    height: 25px;
    border-radius: 50px;
`

export const StyledAdd = styled.div`
    width: 350px;
    
    height: fit-content;
    
    background-color: ${EColorPalette.COOLGRAY};
    border-radius: 10px;

    padding: 15px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    transition: 300ms;

    &:hover {
        filter: brightness(85%) saturate(125%);
    }
`

export const StyledSprintName = styled.div`
    display: flex;
    flex-direction: column;

    cursor: pointer;
`