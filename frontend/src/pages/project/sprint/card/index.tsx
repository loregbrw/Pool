import { useEffect, useState } from "react";
import { ICard } from "../..";
import { StyledCard, StyledCardDes, StyledCardName, StyledConfirm, StyledDate, StyledEdit, StyledImg, StyledNameInput, StyledSpaceBetween, StyledTag, StyledTags } from "../style";

import Menu from "/Menu.png";
import { api } from "../../../../service/api";
import { toast } from "react-toastify";

interface ICardProps {
    id: string;
}

export const Card = ({ id }: ICardProps) => {

    const [card, setCard] = useState<ICard | null>(null);
    const [cardName, setCardName] = useState("");
    const [editingCard, setEditingcard] = useState(false);
    const [change, setChange] = useState(false);

    const [openCard, setOpenCard] = useState(false);

    const editCardName = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await api.patch(`/cards/${id}`,
                {
                    name: cardName
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("Token")}`,
                    },
                });

        } catch (error) {
            toast.error("Erro ao alterar sprint!");
        }

        setChange(!change);
        setEditingcard(false);
    }

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
    }, [id, change]);

    const openEditName = () => {

        setCardName(card!.name);
        setEditingcard(true);
    }

    return (
        <>
            <StyledCard onClick={() => setOpenCard(true)}>
                <StyledSpaceBetween onClick={(e) => e.stopPropagation()}>
                    {
                        !editingCard &&
                        <StyledCardName onClick={openEditName}>{card?.name}</StyledCardName>
                    }
                    {
                        editingCard &&
                        <form onSubmit={editCardName}>
                            <StyledNameInput type="text" value={cardName} onChange={(e) => setCardName(e.target.value)} style={{ fontSize: "1rem" }} />
                            <StyledConfirm type="submit" />
                        </form>
                    }
                    <StyledEdit style={{ height: "20px" }} src={Menu} />
                </StyledSpaceBetween>
                <StyledCardDes>{card?.description || "..."}</StyledCardDes>
                <StyledTags>
                    {
                        card?.tags.map((tag, index) => (
                            <StyledTag key={index}>Pessoal</StyledTag>
                        ))
                    }
                </StyledTags>
                <StyledSpaceBetween>
                    <StyledTags>
                        {
                            card?.users.map((user, index) => (
                                <StyledImg key={index} src="/User.png" />

                            ))
                        }
                        <StyledCardName>+</StyledCardName>

                    </StyledTags>
                    <StyledTags>
                        <StyledDate>
                            {card?.dueDate ? new Date(card.dueDate).toLocaleDateString() : ''}
                            <span onClick={(e) => e.stopPropagation()}>{card?.status === false ? "🔴" : "🟢"}</span>
                        </StyledDate>
                    </StyledTags>
                </StyledSpaceBetween>
            </StyledCard>
        </>
    )
}