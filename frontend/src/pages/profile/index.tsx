import { Main } from "../../components/main"
import { ConfigurationButton, ContentConteiner, DescriptionUser, Image, ImgContainer, InformationContainer, Name, ProfileContainer, UserContainer } from "./style"
import User from "/Perfil.png"
export const Profile = () => {
    return (
        <>
            <Main>
                <ProfileContainer>
                    <ImgContainer>
                        <Image src={User} />
                    </ImgContainer>
                    <ContentConteiner>
                        <InformationContainer>
                            <UserContainer>
                                <Name>Dayne Pacheco</Name>
                                <DescriptionUser>daynepacheco_</DescriptionUser>
                            </UserContainer>
                            <DescriptionUser>daynepacheco@gmail.com</DescriptionUser>
                            <DescriptionUser>88 amigos</DescriptionUser>
                        </InformationContainer>
                        <ConfigurationButton>Configurações</ConfigurationButton>
                    </ContentConteiner>
                </ProfileContainer>
            </Main>
        </>
    )
}