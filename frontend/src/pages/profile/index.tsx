import { useEffect, useState } from "react";
import { Main } from "../../components/main"
import { api } from "../../service/api";
import { ButtonsContainer, ConfigurationButton, ContentConteiner, DescriptionUser, ExitButton, Image, ImgContainer, InformationContainer, Name, ProfileContainer, UserContainer } from "./style"
import { useNavigate } from "react-router-dom";


interface IUser {
    birthdate: Date;
    email: string;
    id: string;
    image: string;
    name: string;
    username: string;
}


// interface IHeaderProps {
//     isProject: boolean;
// }



export const Profile = () => {

    const [user, setUser] = useState<IUser | null>(null);
    const navigate = useNavigate();
    // const { theme } = useContext(ThemeContext);

    function handlerExit() {
        localStorage.removeItem("Token");
        navigate("/");
    }


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
                if (error.response.status == 401) {
                    navigate("/");
                }
            }
        }

        getUser();
    }, [])

    return (
        <>
            <Main>
                <ProfileContainer>
                    <ImgContainer>
                        <Image src={user?.image} />
                    </ImgContainer>
                    <ContentConteiner>
                        <InformationContainer>
                            <UserContainer>
                                <Name>{user?.name}</Name>
                                <DescriptionUser>@{user?.username}</DescriptionUser>
                            </UserContainer>
                            <DescriptionUser>{user?.email}</DescriptionUser>
                            <DescriptionUser>88 amigos</DescriptionUser>
                        </InformationContainer>
                        <ButtonsContainer>
                            <ConfigurationButton onClick={()=>navigate("/config")}>Configurações</ConfigurationButton>
                            <ExitButton onClick={handlerExit}>Sair</ExitButton>
                        </ButtonsContainer>
                    </ContentConteiner>
                </ProfileContainer>
            </Main>
        </>
    )
}