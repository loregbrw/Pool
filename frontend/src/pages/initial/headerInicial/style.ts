import styled from "styled-components";
import { Link } from "react-router-dom";
import { EColorPalette } from "../../../enums/EColorPalette";

export const HeaderContainer = styled.div`
    display: flex;

    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 60px;
    background-color: ${EColorPalette.MINTCREAM};
    padding: 10px 35px;

    position: fixed;
    z-index: 500;
    border-bottom: 2px solid ${EColorPalette.JET};
`

export const LeftTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    width: 250px;
    
`
export const RightTop = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 25px;

    width: 250px;
    height: 100%;
`
export const StyledLink = styled(Link)`
    text-decoration: none;
    font-weight: 700;

    position: relative;

    &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 3px;
        left: -2px;
        bottom: -2px;

        border-radius: 5px;

        background-color: ${EColorPalette.ENGINEERINGORANGE};
        transition: width 0.3s ease-out;
    }

    &:hover::after {
        width: calc(100% + 4px);
    }
`

export const LogoImg = styled.img`
    height: 30px;
`

export const NotificationIcon = styled.img`
    height: 30px;

    cursor: pointer;
    transition: 300ms;

    &:hover {
        filter: brightness(85%) saturate(125%);
    }
`

export const PerfilPhoto = styled.img`
    height: 100%;
    border-radius: 100%;

    cursor: pointer;
    transition: 300ms;

    &:hover {
        filter: brightness(85%) saturate(125%);
    }
`
