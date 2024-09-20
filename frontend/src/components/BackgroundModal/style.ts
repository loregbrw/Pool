import styled from "styled-components";
import { EColorPalette } from "../../enums/EColorPalette";

export const BackgroundContainer = styled.div`
    background-color: ${EColorPalette.JET};
    width: 100%;
    height: 100vh;
    top: 0rem;
    z-index: 900;
    position: fixed;
    opacity: 30%;
`
