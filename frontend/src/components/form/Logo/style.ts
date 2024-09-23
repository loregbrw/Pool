import styled from "styled-components";

export const ImgBackground = styled.div`
    display: flex;
    min-height: 100%;
    eight: 100vh;
    width: 50%;
    
    background-image: url('/BackgroundLogin.jpeg');
    background-position: center;
    background-size: cover;

    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: max(7.5%, 35px);

    @media (max-width: 1100px) {
        display: none;
    }
`
export const LogoImg = styled.img`
    width: min(75%,550px);
`
export const Slogan = styled.h2`
    font-size: 1.75rem;
    text-align: center;
` 