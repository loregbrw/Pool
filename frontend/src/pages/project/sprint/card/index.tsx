import { useEffect, useState } from "react";
import { ICard } from "../..";
import { StyledCard, StyledCardDes, StyledCardName, StyledDate, StyledEdit, StyledImg, StyledSpaceBetween, StyledTag, StyledTags } from "../style";

import Menu from "/Menu.png";
import { api } from "../../../../service/api";

interface ICardProps {
    id: string;
}

export const Card = ({ id }: ICardProps) => {

    const [card, setCard] = useState<ICard | null>(null);

    useEffect(() => {
        const getSprint = async () => {
            if (!id) return

            try {
                const response = await api.get(`/cards/${id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("Token")}`,
                    },
                });

                setCard(response.data.card);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        getSprint();
    }, [id]);

    return (
        <>
            <StyledCard>
                <StyledSpaceBetween>
                    <StyledCardName>{card?.name}</StyledCardName>
                    <StyledEdit style={{ height: "20px" }} src={Menu} />
                </StyledSpaceBetween>
                <StyledCardDes>{card?.description}</StyledCardDes>
                <StyledTags>
                    {
                        card?.tags.map((tag, index) => (
                            <StyledTag key={index}>Pessoal</StyledTag>
                        ))
                    }
                </StyledTags>
                <StyledSpaceBetween>
                    <StyledTags>
                        <StyledImg src="/User.png" />
                        <StyledImg src="/User.png" />
                        <StyledImg src="/User.png" />
                        <StyledCardName>+</StyledCardName>
                    </StyledTags>
                    <StyledTags>
                        <StyledDate>
                            {card?.dueDate ? new Date(card.dueDate).toLocaleDateString() : ''}
                            {card?.status === false ? " 🔴" : " 🟢"}
                        </StyledDate>
                    </StyledTags>
                </StyledSpaceBetween>
            </StyledCard>
        </>
    )
}