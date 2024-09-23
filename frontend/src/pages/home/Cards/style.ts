import styled from "styled-components";
import { EColorPalette } from "../../../enums/EColorPalette";

export const CardsContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-wrap: wrap;
    padding: 40px 0 0 0;
    gap: 25px;

    justify-content: center;
`
export const Card = styled.div` 
    display: flex;
    background-color: ${EColorPalette.FRENCHGRAY};
    width: 100%;
    max-width: 300px;
    flex-direction: column;
    gap: 10px;
    padding: 15px;
    border-radius: 10px;
    justify-content: space-between;

    cursor: pointer;
    transition: 300ms;

    -webkit-box-shadow: 0px 5px 7.5px 0px rgba(51,49,56,0.5);
    -moz-box-shadow: 0px 5px 7.5px 0px rgba(51,49,56,0.5);
    box-shadow: 0px 5px 7.5px 0px rgba(51,49,56,0.5);


    &:hover {
        filter: brightness(85%) saturate(125%);
    }
`

export const CardColor = styled.div`
    background-color: ${EColorPalette.BURNTSIENNA};
    height: 50px;
    width: 100%;
    border-radius: 5px;
    position: relative;

    display: flex;
    align-items: flex-end;
`
export const StyledTag = styled.span`
    color: ${EColorPalette.MINTCREAM};
    padding: 5px;

    font-size: 0.8rem;
    font-weight: 500;

    filter: opacity(85%);
`

export const CardNotification = styled.div`
    background-color: ${EColorPalette.ENGINEERINGORANGE};
    height: 20px;
    width: 20px;
    border-radius: 100%;
    position: absolute;

    right: -5px;
    top: -5px;

    -webkit-box-shadow: 0px 5px 7.5px 0px rgba(51,49,56,0.5);
    -moz-box-shadow: 0px 5px 7.5px 0px rgba(51,49,56,0.5);
    box-shadow: 0px 5px 7.5px 0px rgba(51,49,56,0.5);

`

export const NameProject = styled.h3`
    padding: 0 5px;
`

export const Description = styled.p`
    text-align: justify;
    font-size: 0.8rem;
    padding: 0 5px;
    
    display: -webkit-box;            
    -webkit-line-clamp: 3;           
    -webkit-box-orient: vertical;   
    overflow: hidden;                
    text-overflow: ellipsis; 
`
export const PeopleGroup = styled.div`
    display: flex;
    height: 30px;
    padding: 0 5px;
    gap: 10px;
`

export const PeopleImg = styled.img`
    border-radius: 100%;
    height: 100%;
    object-fit: cover;
`
export const MorePeople = styled.h2`
`