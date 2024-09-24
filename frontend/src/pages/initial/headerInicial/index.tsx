import { HeaderContainer, LeftTop, LogoImg, RightTop, StyledLink } from "./style"

export const HeaderInicial = () => {
    return (
        <>
            <HeaderContainer>
                <LeftTop>
                </LeftTop>
                <LogoImg src="/LogoPoolRed.png" />
                <RightTop>
                    <StyledLink to={"/signup"}>Fazer Cadastro</StyledLink>
                    <StyledLink to={"/login"}>Fazer Login</StyledLink>
                </RightTop>
            </HeaderContainer>
        </>
    )
}