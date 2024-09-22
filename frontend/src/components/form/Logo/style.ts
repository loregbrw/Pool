import styled from "styled-components";
import { EColorPalette } from "../../../enums/EColorPalette";

export const ImgBackground = styled.div`
    background-image: url('/BackgroundLogin.jpeg');
    display: flex;
    height: 100vh;
    width: 50vw;

    background-position: center;
    background-size: cover;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: max(5%, 35px);

    @media (max-width: 1100px) {
        background-color: ${EColorPalette.MINTCREAM};
        background-image: none;
        width: 100vw;
        position: fixed;
        align-items: start;
    }
`
export const LogoImg = styled.img`
    width: min(75%,550px);
`
export const Slogan = styled.h2`
    font-size: 2rem;
    text-align: center;
` 