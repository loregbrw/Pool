import { useContext, useEffect, useState } from "react"
import { HeaderContainer, LeftTop, LogoImg, NotificationIcon, PerfilPhoto, RightTop, StyledLink } from "./style"
import { ThemeContext } from "../../context/theme"
import { api } from "../../service/api";


interface IUser {
    birthdate: Date;
    email: string;
    id: string;
    image: string;
    name: string;
    username: string;
}


interface IHeaderProps {
    isProject: boolean;
}

export const Header = ({ isProject }: IHeaderProps) => {

    const [user, setUser] = useState<IUser | null>(null);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {

        const getUser = async () => {
            try {
                const response = await api.get("/users", {
                    headers: {
                        'Authorization': `Baerer ${localStorage.getItem("Token")}`,
                    }
                });

                setUser(response.data.user);
            } catch (error) {
                console.log(error);
            }
        }

        getUser();
    }, [])

    return (
        <>
            <HeaderContainer>
                <LeftTop>
                    {
                        isProject &&
                        <StyledLink to="/home">Página Inicial</StyledLink>
                    }
                </LeftTop>
                <LogoImg src="/LogoPoolRed.png" />
                <RightTop>
                    <StyledLink to="/calendar">Calendário</StyledLink>
                    <NotificationIcon src={theme.theme === "light" ? "/JetNotification.png" : "/MintNotification.png"} />
                    <PerfilPhoto src={user?.image} />
                </RightTop>
            </HeaderContainer>
        </>
    )
}