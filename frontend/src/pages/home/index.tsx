import { useState } from "react"
import { Main } from "../../components/main"
import { Cards } from "./Cards"
import { HeaderHome } from "./HeaderHome"

export const Home = () => {
    const [tagModalOpen, setTagModalOpen] = useState(false)
    const [projModalOpen, setProjModalOpen] = useState(false)

    const closeModal = () => {
        setTagModalOpen(false);
        setProjModalOpen(false)
    }
    const openTagModal = () => {
        setTagModalOpen(true);
    }
    const openProjModal = () => {
        setProjModalOpen(true);
    }

    return (
        <>
            <Main>
                <HeaderHome  projModalOpen={projModalOpen} tagModalOpen = {tagModalOpen} closeModal= {closeModal} openTagModal={openTagModal} openProjModal={openProjModal}/>
                <Cards/>
            </Main>
        
        </>
    )
}