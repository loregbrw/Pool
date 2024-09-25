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
`

export const InformationContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    gap: 30px;
`
export const UserContainer = styled.div`
`

export const Name = styled.h2`
`

export const DescriptionUser = styled.h3`
    color: white;
`

export const ConfigurationButton = styled.button`
`
