import styled from "styled-components";
import { EColorPalette } from "../../../enums/EColorPalette";

export const StyledModal = styled.div`
    width: calc(100% - 75px);
    max-width: 800px;
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 1000;
    background-color: ${EColorPalette.MINTCREAM};
    padding: 30px;
    border-radius: 10px;
    border: 2px ${EColorPalette.JET} solid;
    gap: 15px;
    align-items: center;
`