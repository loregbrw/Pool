import { StyledBar, StyledBox, StyledButton, StyledDiv, StyledHeader, StyledIcon, StyledProgessDiv, StyledProgress } from "./style";
import Notification from "/JetNotification.png";
import Chat from "/Chat.png";
import Edit from "/Edit.png";
import Plus from "/Plus.png";

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
        <StyledDiv style={{ gap: "15px" }}>
          <StyledBox>
            <StyledProgessDiv>
              <span style={{ fontSize: "0.9rem", fontWeight: "700"}}>Tempo passado:</span>
              <StyledBar>
                <StyledProgress style={{ width: `${timeProgress * 100}%` }} />
              </StyledBar>
            </StyledProgessDiv>
            <StyledProgessDiv>
              <span style={{ fontSize: "0.9rem", fontWeight: "700"}}>Progresso feito:</span>
              <StyledBar>
                <StyledProgress style={{ width: `${tasksProgress * 100}%` }} />
              </StyledBar>
            </StyledProgessDiv>
          </StyledBox>
          <StyledButton>Terminar Sprint</StyledButton>  
        </StyledDiv>
      </StyledHeader>
    </>
  );
};
