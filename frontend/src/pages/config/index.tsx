import { useEffect, useState } from "react";
import { Main } from "../../components/main"
import { ButtonsContainer, ConfigProfile, Configuration, ContentConteiner, DeleteButton, DescriptionUser, Image, ImgContainer, InformationContainer, Label, Name, ProfileContainer, SaveButton, Select, StyledConfirm, StyledNameInput, UserContainer } from "./style"
import { useNavigate } from "react-router-dom";
import { api } from "../../service/api";
import { toast } from "react-toastify";

interface IUser {
    birthdate: Date;
    email: string;
    id: string;
    image: string;
    name: string;
    username: string;
}

export const Config = () => {

    const [user, setUser] = useState<IUser | null>(null);
    const [editingName, setEditingName] = useState(false);
    const [name, setName] = useState(user?.name || '');
    const [editingUserName, setEditingUserName] = useState(false);
    const [editingEmail, setEditingEmail] = useState(false);
    const navigate = useNavigate();

    const editName = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await api.patch(`/users/`,
                {
                    name: user?.name
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("Token")}`,
                    },
                });
                console.log(response);
        } catch (error) {
            console.log(error);
            toast.error("Erro ao alterar nome!");
            
        }
        setEditingName(false);
    }

    const openEditName = () => {

        setName(user?.name || '');
        setEditingName(true);
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
                if (error.response.status === 401) {
                    navigate("/");
                }
            }
        }

        getUser();
    }, [])

    return(
        <>
            <Main>
                <ProfileContainer>
                    <ImgContainer>
                        <Image src={user?.image}/>
                    </ImgContainer>
                    <ContentConteiner>
                        <InformationContainer>
                            <UserContainer>
                                {
                                    !editingName &&
                                    <Name onClick={openEditName}>{user?.name}</Name>

                                }
                                {
                                    editingName &&
                                    <form onSubmit={editName}>
                                        <StyledNameInput type="text" value={name} onChange={(e) => setName(e.target.value)} />
                                        <StyledConfirm type="submit" />
                                    </form>
                                }
                                <DescriptionUser>@{user?.username}</DescriptionUser>
                            </UserContainer>
                            <DescriptionUser>{user?.email}</DescriptionUser>
                        </InformationContainer>
                        <ConfigProfile>
                            <Configuration>
                                <Label>Tema:</Label>
                                <Select>
                                    <option>Claro</option>
                                    <option>Escuro</option>
                                </Select>
                            </Configuration>
                            <Configuration>
                                <Label>Idioma:</Label>
                                <Select>
                                    <option>Português</option>
                                    <option>Inglês</option>
                                </Select>
                            </Configuration>
                        </ConfigProfile>
                        <ButtonsContainer>
                            <SaveButton>Salvar Mudanças</SaveButton>
                            <DeleteButton>Excluir Conta</DeleteButton>
                        </ButtonsContainer>
                    </ContentConteiner>
                </ProfileContainer>
            </Main>
        </>
    )
}