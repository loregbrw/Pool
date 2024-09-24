import { HeaderInicial } from "./headerInicial"
import { Main } from "../../components/main"
import { Description, DescriptionContainer, Footer, Image, ImgContainer, InitialContainer, Slogan } from "./style"
import ImgInitial from "/NotAllEroesWearCapes.png"

export const Initial = () => {
    return(
        <>
            <HeaderInicial/>
            <Main >
                <InitialContainer>
                    <ImgContainer>
                        <Image src={ImgInitial}/>
                    </ImgContainer>
                    <DescriptionContainer>
                        <Slogan>Sua plataforma de DevOps favorita!</Slogan>
                        <Description>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis felis nec sapien rutrum sagittis in ut erat. Fusce ullamcorper quam at leo ultrices molestie. Nunc nisl odio, viverra at tortor in, scelerisque pulvinar risus. Aliquam condimentum sed elit non dictum. Sed blandit turpis luctus sollicitudin venenatis. Curabitur elementum eget nisl et congue.
                        </Description>
                        <Description>
                        Proin quis mi molestie nibh facilisis convallis. Mauris interdum nec risus eget mattis. Nulla finibus augue in vehicula iaculis. Praesent a turpis luctus, venenatis tellus ac, pellentesque lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse pellentesque, enim in faucibus dignissim, libero est volutpat eros, eget bibendum sem orci in eros.
                        </Description>
                    </DescriptionContainer>
                </InitialContainer>
            </Main>
            <Footer/>
        </>
    )
}