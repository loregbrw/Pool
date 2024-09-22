import styled from "styled-components";
import { EColorPalette } from "../../../enums/EColorPalette";

export const CardsContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 40px;
    gap: 25px;
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
`

export const CardColor = styled.div`
    background-color: ${EColorPalette.BURNTSIENNA};
    display: flex;
    height: 50px;
    width: 100%;
    border-radius: 10px;
    justify-content: right;
    position: relative;
`

export const CardNotification = styled.div`
    background-color: ${EColorPalette.JET};
    height: 20px;
    width: 20px;
    border-radius: 100%;
    position: absolute;

    right: -5px;
    top: -5px;
`
export const InfoCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0px 10px;
`
export const NameProject = styled.h3`
`

export const Description = styled.p`
`
export const PeopleGroup = styled.div`
    display: flex;
    height: 30px;
    padding: 0px 10px;
    gap: 10px;
`

export const PeopleImg = styled.img`
    border-radius: 100%;
    height: 100%;
    object-fit: cover;
`
export const MorePeople = styled.h2`
`