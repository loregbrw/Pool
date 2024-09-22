import { StyledMain } from "./style"

export const Main = ({ children }: { children: React.ReactNode}) => {
    
    return (
        <>
            <StyledMain>
                { children }
            </StyledMain>
        </>
    )
}