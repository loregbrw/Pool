import { ButtonsContainer, HeaderContainer, Input, NewProjButton, SearchContainer, SearchImg, SelectTags, TagButton } from "./style"
import { MiniModal } from "../../../components/minimodal"
import { IInput } from "../../../components/form"
import { BackgroundModal } from "../../../components/BackgroundModal"
import { ProjectModal } from "../ProjectModal"

const inputs: IInput[] = [
    { label: "Nome:", type: "text" },
    { label: "Cor:", type: "color" }
]

type IHeaderHome = {
    tagModalOpen: boolean,
    projModalOpen: boolean,
    closeModal: () =>void,
    openTagModal: () => void,
    openProjModal: () => void
}

export const HeaderHome = ({tagModalOpen, closeModal, openTagModal, projModalOpen, openProjModal}: IHeaderHome) => {

    return (
        <>
            <HeaderContainer>
                <ButtonsContainer>
                    <div>
                        <TagButton onClick={openTagModal}>Nova Tag +</TagButton>
                        {
                            tagModalOpen &&
                            <MiniModal title="NOVA TAG" inputs={inputs} closeAction={closeModal} button={{ name: "CONFIRMAR", action: () => { } }} />
                        
                        }
                    </div>
                    <NewProjButton onClick={openProjModal}>Novo Projeto + </NewProjButton>
                </ButtonsContainer>
                <SearchContainer>
                    <SelectTags>
                        <option value="someOption">Some option</option>
                        <option value="otherOption">Other option</option>
                    </SelectTags>
                    <Input />
                    <SearchImg src="/Search.png" />
                </SearchContainer>
            </HeaderContainer>
            {
                            projModalOpen &&
                            <ProjectModal closeAction={closeModal} button={()=> {}}/>
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