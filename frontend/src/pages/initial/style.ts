import styled from "styled-components";
import { EColorPalette } from "../../enums/EColorPalette";

export const InitialContainer =styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

`

export const ImgContainer = styled.div`
    display: flex;
    align-items: center;
`
export const Image = styled.img`
    padding: 40px 20px;
    width: 100%;

`

export const DescriptionContainer = styled.div`
    display: flex;
    gap: 30px;
    flex-direction: column;
    padding: 50px;
    justify-content: center;
`

export const Slogan = styled.h3`
`

export const Description = styled.p`
    width: 100%;
    max-width: 600px;
`

export const Footer = styled.div`
    width: 100%;
    height: 60px;
    background-color: ${EColorPalette.COOLGRAY};
`