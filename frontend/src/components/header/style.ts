import styled from "styled-components";
import { EColorPalette } from "../../enums/EColorPalette";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    background-color: ${EColorPalette.MINTCREAM};
    padding: 10px 35px;

    position: fixed;
    z-index: 500;
`

export const LeftTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    width: 210px;
`

export const CenterTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const RightTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 25px;

    width: 210px;
`
export const BackButton = styled(Link)`
    text-decoration: none;
    font-weight: 700;
`

export const LogoImg = styled.img`
    height: 100%;
`

export const Calendar = styled(Link)`
    text-decoration: none;
    font-weight: 700;
`

export const NotificationButton = styled.button`
    height: 100%;
    border: none;
    background-color: transparent;
    height: 30px;
`
export const NotificationIcon = styled.img`
    height: 100%;
`

export const PerfilButton = styled.button`
    height: 100%; 
    border: none;
    background-color: transparent;
`
export const PerfilPhoto = styled.img`
    height: 100%;
    border-radius: 100%;
`
