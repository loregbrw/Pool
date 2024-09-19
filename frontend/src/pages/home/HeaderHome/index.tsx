import { ButtonsContainer, HeaderContainer, Input, NewProjButton, SearchContainer, SearchImg, SelectTags, TagButton } from "./style"

export const HeaderHome = () => {
    return(
        <>
            <HeaderContainer>
                <ButtonsContainer>
                    <TagButton>Nova Tag + </TagButton>
                    <NewProjButton>Novo Projeto + </NewProjButton>
                </ButtonsContainer>
                <SearchContainer>
                    <SelectTags>
                        <option value="someOption">Some option</option>
                        <option value="otherOption">Other option</option>
                    </SelectTags>
                    <Input/>
                    <SearchImg src="/Search.png"/>
                </SearchContainer>
            </HeaderContainer>
        </>
    )
}