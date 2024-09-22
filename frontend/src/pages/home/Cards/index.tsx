import { Card, CardColor, CardNotification, CardsContainer, Description, InfoCard, MorePeople, NameProject, PeopleGroup, PeopleImg } from "./style"

export const Cards = () => {
    return(
        <>
            <CardsContainer>
                <Card>
                    <CardColor>
                        <CardNotification/>
                    </CardColor>
                    <InfoCard>
                        <NameProject>Nome do Projeto</NameProject>
                        <Description>Descrição descrição descrição</Description>
                    </InfoCard>
                    <PeopleGroup>
                        <PeopleImg src="/Perfil.png"/>
                        <PeopleImg src="/Perfil.png"/>
                        <PeopleImg src="/Perfil.png"/>
                        <MorePeople>+</MorePeople>
                    </PeopleGroup>
                </Card>
            </CardsContainer>
        </>
    )
}