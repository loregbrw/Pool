import { BackgroundContainer } from "./style"

export interface IBackgroundProps{
    action: () => void;
}


export const BackgroundModal = ({action}: IBackgroundProps) =>{
    return(
        <>
            <BackgroundContainer onClick={action} />
        </>
    )
}