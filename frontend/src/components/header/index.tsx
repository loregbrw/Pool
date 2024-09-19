import { useContext } from "react"
import { Calendar, CenterTop, BackButton, HeaderContainer, LeftTop, LogoImg, NotificationButton, NotificationIcon, PerfilButton, PerfilPhoto, RightTop } from "./style"
import { ThemeContext } from "../../context/theme"



interface IHeaderProps {
    isProject: boolean;
}

export const Header = ({ isProject }: IHeaderProps) => {

    const { theme } = useContext(ThemeContext);

    return (
        <>
            <HeaderContainer>
                <LeftTop>
                    {
                        isProject &&
                        <BackButton to="/home">Página Inicial</BackButton>
                    }
                </LeftTop>
                <CenterTop>
                    <LogoImg src="/LogoPoolRed.png"/>
                </CenterTop>
                <RightTop>
                    <Calendar to="/calendar">Calendário</Calendar>
                    <NotificationButton>
                        <NotificationIcon src={theme.theme === "light" ? "/JetNotification.png" :"/MintNotification.png" } />
                    </NotificationButton>
                    <PerfilButton>
                        <PerfilPhoto src="/Perfil.png" />
                    </PerfilButton>
                </RightTop>
            </HeaderContainer>
        </>
    )
}