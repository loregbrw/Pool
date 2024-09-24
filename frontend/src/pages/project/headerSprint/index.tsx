import { StyledBar, StyledBox, StyledButton, StyledDiv, StyledHeader, StyledIcon, StyledProgress } from "./style"
import Notification from "/JetNotification.png"
import Chat from "/Chat.png"
import Edit from "/Edit.png"
import Plus from "/Plus.png"

interface IHeaderSprintProps {
    timeProgress: number;
    tasksProgress: number;
}

export const HeaderSprint = ({ timeProgress, tasksProgress }: IHeaderSprintProps) => {
    return (
        <>
            <StyledHeader>
                <StyledDiv>
                    <StyledIcon src={Notification} />
                    <StyledIcon src={Chat} />
                    <StyledIcon src={Edit} />
                    <StyledIcon src={Plus} />
                </StyledDiv>
                <StyledDiv>
                    <StyledBox>
                        <StyledDiv>
                            <span>
                                Tempo passado:
                            </span>
                            <StyledBar>
                                <StyledProgress style={{ width: `${timeProgress / 150}px` }} />
                            </StyledBar>
                        </StyledDiv>
                        <StyledDiv>
                            <span>
                                Progresso feito:
                            </span>
                            <StyledBar />
                        </StyledDiv>
                    </StyledBox>
                    <StyledButton>Terminar Sprint</StyledButton>
                </StyledDiv>
            </StyledHeader>
        </>
    )
}