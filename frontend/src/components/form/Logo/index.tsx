import { ImgBackground, LogoImg, Slogan } from "./style";
import LogoPool from '/LogoPoolJet.png';

export const Logo = () => {
    return (
        <>
            <ImgBackground>
                <LogoImg src={LogoPool} />
                <Slogan>Sua plataforma de DevOps favorita!</Slogan>
            </ImgBackground>
        </>
    )
}