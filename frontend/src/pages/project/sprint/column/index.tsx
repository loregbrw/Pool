import { useState } from "react";
import { IColumn } from "../.."
import { Card } from "../card"
import { StyledButton, StyledColumn, StyledConfirm, StyledContent, StyledEdit, StyledName, StyledNameInput, StyledSections, StyledSpaceBetween } from "../style"
import Options from "/Options.png"
import { api } from "../../../../service/api";
import { toast } from "react-toastify";

interface IColumnProps {
    column: IColumn;
    index: number;
    change: boolean,
    setChange: (change: boolean) => void;
    addCard: (columnId: string, len: number) => void;
}

export const Column = ({ column, index, addCard, change, setChange }: IColumnProps) => {

    const [columnName, setColumnName] = useState(column.name);
    const [editingColumn, setEditingColumn] = useState(false);

    const editColumnName = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await api.patch(`/columns/${column.id}`,
                {
                    name: columnName
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
        setEditingColumn(false);
    }

    const openEditName = () => {

        setColumnName(column.name);
        setEditingColumn(true);
    }


    return (
        <>
            <StyledColumn key={index}>
                <StyledSpaceBetween>
                    {
                        !editingColumn &&
                        <StyledName onClick={openEditName}>{column.name}</StyledName>
                    }
                    {
                        editingColumn &&
                        <form onSubmit={editColumnName}>
                            <StyledNameInput type="text" value={columnName} onChange={(e) => setColumnName(e.target.value)} />
                            <StyledConfirm type="submit" />
                        </form>
                    }
                    <StyledEdit src={Options} />
                </StyledSpaceBetween>
                <StyledButton onClick={() => addCard(column.id, column.cards.length)}>NOVO CARTÃO +</StyledButton>
                <StyledContent>
                    <StyledSections>
                        {
                            column.cards.sort((a, b) => a.index - b.index).map((card, index) => (
                                <Card key={index} id={card.id} />
                            ))
                        }
                    </StyledSections>
                    {/* <StyledSections>
                                            <Section id={""} />
                                        </StyledSections> */}
                </StyledContent>
            </StyledColumn>
        </>
    )
}