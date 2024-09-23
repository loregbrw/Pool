import { ButtonsContainer, HeaderContainer, Input, NewProjButton, SearchContainer, SearchImg, SelectTags, StyledMenu, TagButton } from "./style"
import { MiniModal } from "../../../components/minimodal"
import { IInput } from "../../../components/form"
import { BackgroundModal } from "../../../components/BackgroundModal"
import { ProjectModal } from "../ProjectModal"
import { useEffect, useState } from "react"
import { api } from "../../../service/api"
import { toast } from "react-toastify"
import { EColorPalette } from "../../../enums/EColorPalette"
import Options from "/Options.png"

type IHeaderHome = {
    tagModalOpen: boolean,
    projModalOpen: boolean,
    closeModal: () => void,
    openTagModal: () => void,
    openProjModal: () => void
}

export interface ITag {
    id: string;
    name: string;
    color: string;
}

export const HeaderHome = ({ tagModalOpen, closeModal, openTagModal, projModalOpen, openProjModal }: IHeaderHome) => {

    const [tagName, setTagName] = useState("");
    const [tagColor, setTagColor] = useState("");
    const [tags, setTags] = useState<ITag[]>([]);

    const inputs: IInput[] = [
        { label: "Nome:", type: "text", onChange: (n) => setTagName(n) },
        { label: "Cor:", type: "color", onChange: (c) => setTagColor(c) }
    ];

    useEffect(() => {

        const getTags = async () => {
            try {
                const response = await api.get("/tags", {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("Token")}`,
                    }
                });

                setTags(response.data.tags);
            } catch (error) {
                console.log(error);

                if (error.response.data.message) {
                    toast.error(error.response.data.message);
                    return;
                }

                toast.warning(error.message);
            }

        }

        getTags();

    }, [tagModalOpen, projModalOpen])

    const createTag = async (e: React.FormEvent) => {
        e.preventDefault();

        try {

            const response = await api.post("/tags",
                {
                    name: tagName,
                    color: tagColor
                },
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("Token")}`,
                    }
                }
            );

            closeModal();
            toast.success(`Tag ${tagName} criada!`);

        } catch (error) {
            console.log(error);

            if (error.response.data.message) {
                toast.error(error.response.data.message);
                return;
            }

            toast.warning(error.message);
        }
    }

    return (
        <>
            <HeaderContainer>
                <ButtonsContainer>
                    <div>
                        <TagButton onClick={openTagModal}>Nova Tag +</TagButton>
                        {
                            tagModalOpen &&
                            <MiniModal title="NOVA TAG" inputs={inputs} closeAction={closeModal} button={{ name: "Criar tag", action: createTag }} />

                        }
                    </div>
                    <NewProjButton onClick={openProjModal}>Novo Projeto + </NewProjButton>
                    <StyledMenu src={Options} />
                </ButtonsContainer>
                <SearchContainer>
                    <SelectTags>
                        <option style={{ color: EColorPalette.MINTCREAM}} value="">Filtrar</option>
                        {
                            tags.map((tag, index) => (
                                <option style={{ backgroundColor: tag.color, color: EColorPalette.MINTCREAM}} value={tag.id} key={index}>{tag.name}</option>
                            ))
                        }
                    </SelectTags>
                    <Input placeholder="Pesquise um projeto" />
                    <SearchImg src="/Search.png" />
                </SearchContainer>
            </HeaderContainer>
            {
                projModalOpen &&
                <ProjectModal closeAction={closeModal} />
            }
            {
                tagModalOpen &&
                <>
                    <BackgroundModal action={closeModal} />
                </>
            }
            {
                projModalOpen &&
                <>
                    <BackgroundModal action={closeModal} />
                </>
            }

        </>
    )
}