import styled from "styled-components";
import { EColorPalette } from "../../enums/EColorPalette";



export const ProfileContainer = styled.div`
    background-color: ${EColorPalette.FRENCHGRAY};
    padding: 30px;
    display:flex;
    border-radius: 20px;
    gap: 50px;
    flex-wrap: wrap;
    width: 100%;
    max-width: 800px;
    justify-content: center;
`

export const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Image = styled.img`
    width: 100%;
    max-width: 300px;
    border-radius: 100%;
`
export const ContentConteiner = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    gap: 20px;
`

export const InformationContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    flex-direction: column;
    gap: 30px;
`
export const UserContainer = styled.div`
`

export const Name = styled.h2`
    width: 100%;
    font-size: 1.2rem;
`

export const DescriptionUser = styled.div`
    font-weight: 500;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    font-size: 1rem;
`
export const StyledDescriptionInput = styled.input`
    font-size: 1rem;
    font-weight: 500;
    width: 100%;

    border: none;
    background-color: transparent;

    border-bottom: 2px solid ${EColorPalette.JET};
    outline: none;
`


export const ConfigProfile = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const Label = styled.label`
font-weight: 500;
`

export const Select = styled.select`
    border: none;
    border-radius: 5px;
`

export const Configuration = styled.div`
    display: flex;
    gap: 10px;
`

export const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    flex-direction: row;
`
export const SaveButton = styled.button`
    padding: 5px;
    width: 50%;
    display: flex;
    border-radius: 10px;
    justify-content: center;
    font-weight: 700;
    background-color: ${EColorPalette.BURNTSIENNA};
    color: white;
    border: none;
`

export const DeleteButton = styled.button`
    padding: 5px;
    width: 50%;
    display: flex;
    border-radius: 10px;
    justify-content: center;
    font-weight: 700;
    background-color: ${EColorPalette.ENGINEERINGORANGE};
    color: white;
    border: none;
`

export const StyledNameInput = styled.input`
    font-size: 1.2rem;
    font-weight: 700;
    width: 100%;

    border: none;
    background-color: transparent;

    border-bottom: 2px solid ${EColorPalette.JET};
    outline: none;
`
export const EditIcon = styled.img`
    width: 25px;
    height: 25px;
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