import { Card } from "../card";
import { StyledCardName, StyledSection } from "../style";

interface ISectionProps {
    id: string;
}

export const Section = ({ id }: ISectionProps) => {
    return (
        <>
            <StyledSection>
                <StyledCardName>Section Name</StyledCardName>
                <Card id={""} />
            </StyledSection>
        </>
    )
}