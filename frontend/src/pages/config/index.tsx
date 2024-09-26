import { useEffect, useState } from "react";
import { Main } from "../../components/main"
import { ButtonsContainer, ConfigProfile, Configuration, ContentConteiner, DeleteButton, DescriptionUser, EditIcon, Image, ImgContainer, InformationContainer, Label, Name, ProfileContainer, SaveButton, Select, StyledConfirm, StyledDescriptionInput, StyledNameInput, UserContainer } from "./style"
import { useNavigate } from "react-router-dom";
import { api } from "../../service/api";
import { toast } from "react-toastify";
import Edit from "/EditIcon.png"

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
    const [editedName, setEditedName] = useState<string>("");
    const [editedUsername, setEditedUsername] = useState<string>("");
    const navigate = useNavigate();

    const saveChanges = async () => {
        try {
            if (!user?.id) {
                throw new Error("User ID is missing.");
            }
    
            const response = await api.patch(`/users/${user.id}`, 
                {
                    name: editedName,
                    username: editedUsername,
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("Token")}`,
                    },
                });
            navigate("/profile");
            toast.success("Nome alterado com sucesso!");
        } catch (error) {
            console.log(error);
            toast.error("Erro ao alterar nome!");

        }
    }


    useEffect(() => {

        const getUser = async () => {
            try {
                const response = await api.get("/users", {
                    headers: {
                        'Authorization': `Baerer ${localStorage.getItem("Token")}`,
                    }
                });

                const user = response.data.user;
                setUser(user);
                setEditedName(user?.name);
                setEditedUsername(user?.username);

            } catch (error) {
                console.log(error);
                if (error.response.status === 401) {
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
                                <StyledNameInput
                                    type="text"
                                    value={editedName} 
                                    onChange={(e) => setEditedName(e.target.value)} 
                                />
                                
                                <DescriptionUser>
                                    <StyledDescriptionInput
                                    type="text"
                                    value={editedUsername} 
                                    onChange={(e) => setEditedUsername(e.target.value)} 
                                    />
                                </DescriptionUser>
                                
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
                            <SaveButton onClick={saveChanges}>Salvar Mudanças</SaveButton>
                            <DeleteButton>Excluir Conta</DeleteButton>
                        </ButtonsContainer>
                    </ContentConteiner>
                    <EditIcon src={Edit}/>
                </ProfileContainer>
            </Main>
        </>
    )
}